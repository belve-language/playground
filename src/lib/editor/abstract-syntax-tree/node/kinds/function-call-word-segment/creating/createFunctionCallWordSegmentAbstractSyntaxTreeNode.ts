import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallWordSegmentAbstractSyntaxTreeNode(
	children,
): FunctionCallWordSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallWordSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallWordSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
