import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderWordSegmentAbstractSyntaxTreeNode(
	children,
): FunctionHeaderWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderWordSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
