import type {UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			unknownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
