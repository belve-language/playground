import type {WordCharacterConcreteSyntaxTreeNodeAtom} from "./atom/WordCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WordCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WordCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WordCharacterConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
	public abstractify(): string {
		return this.atom.character;
	}
}
