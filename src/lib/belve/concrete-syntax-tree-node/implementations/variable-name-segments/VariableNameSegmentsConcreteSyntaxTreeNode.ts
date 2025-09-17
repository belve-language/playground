import type {VariableNameSegmentsConcreteSyntaxTreeNodeAtom} from "./atom/VariableNameSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class VariableNameSegmentsConcreteSyntaxTreeNode extends ConcreteSyntaxTreeNode<VariableNameSegmentsConcreteSyntaxTreeNodeAtom> {
	public constructor(atom: VariableNameSegmentsConcreteSyntaxTreeNodeAtom) {
		super(atom);
	}
}
