import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
export function createFunctionCallKnownSegmentAbstractSyntaxTreeNode(
	identifier: Identifier,
): FunctionCallKnownSegmentAbstractSyntaxTreeNode {
	const treeNode: FunctionCallKnownSegmentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			functionCallKnownSegmentAbstractSyntaxTreeNodeTypeName,
			{identifier} as const,
		);
	return treeNode;
}
