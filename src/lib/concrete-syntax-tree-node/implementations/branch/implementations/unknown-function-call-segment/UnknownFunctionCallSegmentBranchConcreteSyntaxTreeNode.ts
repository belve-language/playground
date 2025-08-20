import type {UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			unknownFunctionCallSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
