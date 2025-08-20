import type {UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren} from "./children/UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren.ts";
import {unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName} from "./type-name/unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {BranchConcreteSyntaxTreeNode} from "../../BranchConcreteSyntaxTreeNode.ts";
export class UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNode extends BranchConcreteSyntaxTreeNode<
	UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
	typeof unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName
> {
	public constructor(
		children: UnknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			spanIndexes,
			unknownFunctionHeaderSegmentBranchConcreteSyntaxTreeNodeTypeName,
		);
	}
}
