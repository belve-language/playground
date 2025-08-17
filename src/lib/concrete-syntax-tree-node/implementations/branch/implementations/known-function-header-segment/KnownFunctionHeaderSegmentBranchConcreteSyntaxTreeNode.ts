import type {KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
}
