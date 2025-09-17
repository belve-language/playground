import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
export type FunctionCallStatementAbstractSyntaxTreeNodeChildren = {
	readonly segments: readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	];
};
