import type {EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren} from "./children/EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: EndingWithWordFunctionHeaderSegmentsBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
