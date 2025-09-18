import type {KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren} from "./children/KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../FunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import {knownFunctionHeaderSegmentAbstractSyntaxTreeNodeId} from "./id/knownFunctionHeaderSegmentAbstractSyntaxTreeNodeId.ts";
export class KnownFunctionHeaderSegmentAbstractSyntaxTreeNode extends FunctionHeaderSegmentAbstractSyntaxTreeNode<KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: KnownFunctionHeaderSegmentAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(
			children,
			knownFunctionHeaderSegmentAbstractSyntaxTreeNodeId,
			spanIndexes,
		);
	}
}
