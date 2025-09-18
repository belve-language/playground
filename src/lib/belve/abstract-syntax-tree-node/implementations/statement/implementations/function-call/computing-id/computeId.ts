import type {SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode} from "../../../../function-call-statement-segment/supported/SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode.ts";
export function computeId(
	segments: readonly [
		SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode[]),
	],
): string {
	const id: string = segments
		.map(
			(
				segment: SupportedFunctionCallStatementSegmentAbstractSyntaxTreeNode,
			): string => {
				return segment.id;
			},
		)
		.join(" ");
	return id;
}
