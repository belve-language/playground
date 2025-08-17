import type {EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: EndingWithUnknownFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
