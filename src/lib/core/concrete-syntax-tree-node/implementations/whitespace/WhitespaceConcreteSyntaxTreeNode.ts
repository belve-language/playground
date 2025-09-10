import type {WhitespaceConcreteSyntaxTreeNodeAtom} from "./atom/WhitespaceConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class WhitespaceConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<WhitespaceConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: WhitespaceConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
}
