import type {WordCharactersConcreteSyntaxTreeNodeAtom} from "./atom/WordCharactersConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
import {SuccessAbstractifyingResult} from "../../abstractifying/result/implementations/success/SuccessAbstractifyingResult.ts";
export class WordCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordCharactersConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): SuccessAbstractifyingResult<string> {
		const wordCharacter = this.atom.leftSubAtom.node;
		const optionalWordCharacters = this.atom.rightSubAtom.node;
		const abstractifiedWordCharacter = wordCharacter.abstractify();
		const abstractifiedOptionalWordCharacters =
			optionalWordCharacters.abstractify();
		if (abstractifiedOptionalWordCharacters === null) {
			const abstractifiedWordCharacters = abstractifiedWordCharacter;
			const wordCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
				new SuccessAbstractifyingResult<string>(abstractifiedWordCharacters);
			return wordCharactersAbstractifyingResult;
		} else {
			const abstractifiedWordCharacters = `${abstractifiedWordCharacter}${abstractifiedOptionalWordCharacters}`;
			const wordCharactersAbstractifyingResult: SuccessAbstractifyingResult<string> =
				new SuccessAbstractifyingResult<string>(abstractifiedWordCharacters);
			return wordCharactersAbstractifyingResult;
		}
	}
}
