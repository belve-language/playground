import type {UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren} from "./children/UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../FunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {unknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeId} from "./id/unknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeId.ts";
export class UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode extends FunctionCallStatementSegmentAbstractSyntaxTreeNode<UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			unknownFunctionCallStatementSegmentAbstractSyntaxTreeNodeId,
			spanIndexes,
		);
	}
}
