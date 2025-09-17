import {UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/implementations/unknown/UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
export function computeUnknownsNames(
	segments: readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames = segments
		.filter((segment) => {
			return (
				segment
				instanceof UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode
			);
		})
		.map((segment) => {
			return segment.children.name;
		});
	return knownsNames;
}
