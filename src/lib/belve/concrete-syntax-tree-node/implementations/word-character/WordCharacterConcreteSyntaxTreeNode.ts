import type {WordCharacterConcreteSyntaxTreeNodeAtom} from "./atom/WordCharacterConcreteSyntaxTreeNodeAtom.ts";
import type {WordCharacter} from "../../../character/implementations/word/WordCharacter.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WordCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordCharacterConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): WordCharacter {
		const abstractifiedWordCharacter: WordCharacter = this.atom.character;
		return abstractifiedWordCharacter;
	}
}
