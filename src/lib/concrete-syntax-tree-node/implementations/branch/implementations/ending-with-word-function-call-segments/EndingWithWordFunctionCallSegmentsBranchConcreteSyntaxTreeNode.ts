import type {EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: EndingWithWordFunctionCallSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
