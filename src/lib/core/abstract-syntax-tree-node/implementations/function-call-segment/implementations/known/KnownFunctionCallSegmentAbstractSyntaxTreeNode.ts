import type {KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionCallSegmentAbstractSyntaxTreeNode} from "../../FunctionCallSegmentAbstractSyntaxTreeNode.ts";
import {knownFunctionCallSegmentAbstractSyntaxTreeNodeId} from "./id/knownFunctionCallSegmentAbstractSyntaxTreeNodeId.ts";
export class KnownFunctionCallSegmentAbstractSyntaxTreeNode extends FunctionCallSegmentAbstractSyntaxTreeNode<KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionCallSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			knownFunctionCallSegmentAbstractSyntaxTreeNodeId,
			spanIndexes,
		);
	}
}
