import type {WhitespaceCharactersConcreteSyntaxTreeNodeAtom} from "./atom/WhitespaceCharactersConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WhitespaceCharactersConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WhitespaceCharactersConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WhitespaceCharactersConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
}
