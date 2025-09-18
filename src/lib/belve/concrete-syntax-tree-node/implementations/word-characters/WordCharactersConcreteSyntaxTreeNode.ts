import type {WordCharactersConcreteSyntaxTreeNodeAtom} from "./atom/WordCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
import type {Character} from "../../../character/Character.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WordCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordCharactersConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const wordCharacter = this.atom.leftSubAtom.node;
		const optionalWordCharacters = this.atom.rightSubAtom.node;
		const abstractifiedWordCharacter = wordCharacter.abstractify();
		const optionalWordCharactersAbstractifyingResult =
			optionalWordCharacters.abstractify();
		switch (optionalWordCharactersAbstractifyingResult.typeName) {
			case successAbstractifyingResultTypeName: {
				const abstractifiedOptionalWordCharacters =
					optionalWordCharactersAbstractifyingResult.data;
				if (abstractifiedOptionalWordCharacters === null) {
					const abstractifiedWordCharacters: Character =
						abstractifiedWordCharacter;
					const wordCharactersAbstractifyingResult: SuccessAbstractifyingResult<Character> =
						new SuccessAbstractifyingResult<Character>(
							abstractifiedWordCharacters,
						);
					return wordCharactersAbstractifyingResult;
				} else {
					const abstractifiedWordCharacters: `${Character}${string}` = `${abstractifiedWordCharacter}${abstractifiedOptionalWordCharacters}`;
					const wordCharactersAbstractifyingResult: SuccessAbstractifyingResult<`${Character}${string}`> =
						new SuccessAbstractifyingResult<`${Character}${string}`>(
							abstractifiedWordCharacters,
						);
					return wordCharactersAbstractifyingResult;
				}
			}
		}
	}
}
