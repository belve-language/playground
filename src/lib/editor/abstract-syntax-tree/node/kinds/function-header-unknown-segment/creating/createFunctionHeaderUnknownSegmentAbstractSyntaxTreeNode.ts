import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderUnknownSegmentAbstractSyntaxTreeNodeTypeName,
			{identifier} as const,
		);
	return treeNode;
}
