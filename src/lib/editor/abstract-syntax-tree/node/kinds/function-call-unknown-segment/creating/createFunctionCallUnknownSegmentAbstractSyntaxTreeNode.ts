import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallUnknownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallUnknownSegmentAbstractSyntaxTreeNodeTypeName,
			{identifier} as const,
		);
	return treeNode;
}
