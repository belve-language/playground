import type {WhitespaceCharacterConcreteSyntaxTreeNodeAtom} from "./atom/WhitespaceCharacterConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WhitespaceCharacterConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WhitespaceCharacterConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WhitespaceCharacterConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
}
