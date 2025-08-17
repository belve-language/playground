import type {UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
