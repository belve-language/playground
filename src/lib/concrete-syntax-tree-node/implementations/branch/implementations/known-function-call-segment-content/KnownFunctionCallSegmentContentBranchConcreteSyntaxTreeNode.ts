import type {KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionCallSegmentContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
