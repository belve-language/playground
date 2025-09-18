import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export type FunctionHeaderAbstractSyntaxTreeNodeChildren = {
	readonly segments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	];
};
