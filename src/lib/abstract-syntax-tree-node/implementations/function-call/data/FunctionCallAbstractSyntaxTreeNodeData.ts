export type FunctionCallAbstractSyntaxTreeNodeData = {
	readonly segments: readonly [
		FunctionCallSegmentAbstractSyntaxTreeNode,
		...(readonly FunctionCallSegmentAbstractSyntaxTreeNode[]),
	];
};
