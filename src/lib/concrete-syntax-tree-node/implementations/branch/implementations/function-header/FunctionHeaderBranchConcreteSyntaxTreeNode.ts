import type {FunctionHeaderBranchConcreteSyntaxTreeNodeChildren} from "./children/FunctionHeaderBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class FunctionHeaderBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<FunctionHeaderBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: FunctionHeaderBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
