import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderUnknownSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
