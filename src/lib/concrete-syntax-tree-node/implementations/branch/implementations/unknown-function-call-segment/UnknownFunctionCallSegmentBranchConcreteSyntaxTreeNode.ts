import type {UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
