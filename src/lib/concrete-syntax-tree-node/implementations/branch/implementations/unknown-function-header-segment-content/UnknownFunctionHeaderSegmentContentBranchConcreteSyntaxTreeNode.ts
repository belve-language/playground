import type {UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
