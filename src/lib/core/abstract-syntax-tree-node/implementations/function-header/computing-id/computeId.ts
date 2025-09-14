import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export function computeId(
	segments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	],
): string {
	const id: string = segments
		.map(
			(
				segment: SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
			): string => {
				return segment.id;
			},
		)
		.join(" ");
	return id;
}
