import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeDataChildren} from "../data-children/FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode(
	children: FunctionHeaderKnownSegmentAbstractSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderKnownSegmentAbstractSyntaxTreeNode {
	return createBranchAbstractSyntaxTreeNode(
		functionHeaderKnownSegmentAbstractSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
