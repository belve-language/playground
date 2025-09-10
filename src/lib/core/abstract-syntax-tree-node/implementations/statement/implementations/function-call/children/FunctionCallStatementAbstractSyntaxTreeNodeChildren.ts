import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export type FunctionCallStatementAbstractSyntaxTreeNodeChildren = {
	readonly segments: readonly [
		SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
	];
};
