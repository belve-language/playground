import type {FunctionBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
