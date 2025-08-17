import type {KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
