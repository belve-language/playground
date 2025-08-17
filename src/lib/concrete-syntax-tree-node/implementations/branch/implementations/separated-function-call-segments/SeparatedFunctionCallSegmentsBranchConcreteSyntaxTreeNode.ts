import type {SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: SeparatedFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
