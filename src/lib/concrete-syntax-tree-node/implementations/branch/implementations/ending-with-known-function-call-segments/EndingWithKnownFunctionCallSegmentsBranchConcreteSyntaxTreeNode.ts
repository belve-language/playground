import type {EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: EndingWithKnownFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
