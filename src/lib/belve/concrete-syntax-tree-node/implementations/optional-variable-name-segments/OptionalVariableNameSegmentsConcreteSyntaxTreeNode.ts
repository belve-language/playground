import type {OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class OptionalVariableNameSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(
		atom: OptionalVariableNameSegmentsConcreteSyntaxTreeNodeAtom,
	) {
		super(atom);
	}
}
