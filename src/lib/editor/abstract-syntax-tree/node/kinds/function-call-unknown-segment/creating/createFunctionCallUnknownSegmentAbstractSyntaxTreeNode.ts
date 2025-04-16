import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallUnknownSegmentAbstractSyntaxTreeNode(
	children,
): FunctionCallUnknownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallUnknownSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
