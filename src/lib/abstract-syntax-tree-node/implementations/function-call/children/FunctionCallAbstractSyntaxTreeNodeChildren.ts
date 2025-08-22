import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export type FunctionCallAbstractSyntaxTreeNodeChildren = {
	readonly segments: readonly [
		...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
		SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
	];
};
