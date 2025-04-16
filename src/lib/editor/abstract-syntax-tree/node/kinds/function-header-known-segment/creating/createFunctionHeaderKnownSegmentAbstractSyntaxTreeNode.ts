import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode(
	children,
): FunctionHeaderKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderKnownSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
