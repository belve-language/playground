import type {OptionalWhitespaceConcreteSyntaxTreeNodeAtom} from "./atom/OptionalWhitespaceConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalWhitespaceConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalWhitespaceConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: OptionalWhitespaceConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
}
