import type {WordCharactersConcreteSyntaxTreeNodeAtom} from "./atom/WordCharactersConcreteSyntaxTreeNodeAtom.ts";
import {SuccessAbstractifyingResult} from "../../../abstractifying-result/implementations/success/SuccessAbstractifyingResult.ts";
import {successAbstractifyingResultTypeName} from "../../../abstractifying-result/implementations/success/type-name/successAbstractifyingResultTypeName.ts";
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
					const abstractifiedWordCharacters: string =
						abstractifiedWordCharacter;
					const wordCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedWordCharacters,
						);
					return wordCharactersAbstractifyingResult;
				} else {
					const abstractifiedWordCharacters: string = `${abstractifiedWordCharacter}${abstractifiedOptionalWordCharacters}`;
					const wordCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
						new SuccessAbstractifyingResult<string>(
							abstractifiedWordCharacters,
						);
					return wordCharactersAbstractifyingResult;
				}
			}
		}
	}
}
