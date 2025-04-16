import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderWordSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderWordSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
