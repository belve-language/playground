import type {KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../FunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import {knownFunctionCallStatementSegmentAbstractSyntaxTreeNodeId} from "./id/knownFunctionCallStatementSegmentAbstractSyntaxTreeNodeId.ts";
export class KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode extends FunctionCallStatementSegmentAbstractSyntaxTreeNode<KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionCallStatementSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			knownFunctionCallStatementSegmentAbstractSyntaxTreeNodeId,
			spanIndexes,
		);
	}
}
