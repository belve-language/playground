import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionHeaderKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderKnownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionHeaderKnownSegmentAbstractSyntaxTreeNodeTypeName,
			{identifier} as const,
		);
	return treeNode;
}
