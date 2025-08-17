import type {EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: EndingWithUnknownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
