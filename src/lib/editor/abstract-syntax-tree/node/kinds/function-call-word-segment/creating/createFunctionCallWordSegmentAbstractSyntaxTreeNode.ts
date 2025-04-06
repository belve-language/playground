import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallWordSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallWordSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallWordSegmentAbstractSyntaxTreeNodeTypeName,
			{identifier} as const,
		);
	return treeNode;
}
