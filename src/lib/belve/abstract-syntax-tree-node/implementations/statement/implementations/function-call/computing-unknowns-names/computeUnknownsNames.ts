import {UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/implementations/unknown/UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
export function computeUnknownsNames(
	segments: readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames: readonly string[] = segments
		.filter(
			(
				segment: SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
			): segment is UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode => {
				return (
					segment
					instanceof UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode
				);
			},
		)
		.map(
			(
				segment: UnknownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
			): string => {
				return segment.children.name;
			},
		);
	return knownsNames;
}
