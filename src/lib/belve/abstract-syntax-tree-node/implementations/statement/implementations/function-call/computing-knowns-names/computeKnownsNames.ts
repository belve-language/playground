import {KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/implementations/known/KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
export function computeKnownsNames(
	segments: readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames: readonly string[] = segments
		.filter(
			(
				segment: SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
			): segment is KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode => {
				return (
					segment
					instanceof KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode
				);
			},
		)
		.map(
			(
				segment: KnownFunctionCallStatementSegmentAbstractSyntaxTreeNode,
			): string => {
				return segment.children.name;
			},
		);
	return knownsNames;
}
