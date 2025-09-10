import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export function computeId(
	segments: readonly [
		SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
	],
): string {
	const id = segments
		.map((segment) => {
			return segment.id;
		})
		.join(" ");
	return id;
}
