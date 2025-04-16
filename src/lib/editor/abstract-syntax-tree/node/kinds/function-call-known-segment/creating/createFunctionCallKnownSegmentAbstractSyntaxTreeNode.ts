import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallKnownSegmentAbstractSyntaxTreeNode(
	children,
): FunctionCallKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallKnownSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
