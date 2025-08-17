import type {FunctionsBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
