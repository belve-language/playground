import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallKnownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallKnownSegmentAbstractSyntaxTreeNodeKindName,
			{identifier} as const,
		);
	return treeNode;
}
