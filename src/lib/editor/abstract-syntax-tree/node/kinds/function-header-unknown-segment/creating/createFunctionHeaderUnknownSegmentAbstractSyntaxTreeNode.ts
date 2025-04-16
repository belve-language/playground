import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode(
	children,
): FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderUnknownSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
