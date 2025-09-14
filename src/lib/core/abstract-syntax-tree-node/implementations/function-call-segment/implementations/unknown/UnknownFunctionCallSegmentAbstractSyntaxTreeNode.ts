import type {UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {unknownFunctionCallSegmentAbstractSyntaxTreeNodeId} from "./id/unknownFunctionCallSegmentAbstractSyntaxTreeNodeId.ts";
export class UnknownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			unknownFunctionCallSegmentAbstractSyntaxTreeNodeId,
			spanIndexes,
		);
	}
}
