import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderWordSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderWordSegmentAbstractSyntaxTreeNodeTypeName,
			{identifier} as const,
		);
	return treeNode;
}
