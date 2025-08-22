import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export type FunctionHeaderAbstractSyntaxTreeNodeChildren = {
	readonly segments: readonly [
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
	];
};
