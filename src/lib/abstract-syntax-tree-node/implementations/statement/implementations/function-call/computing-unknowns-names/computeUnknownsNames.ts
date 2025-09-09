import {UnknownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../function-call-segment/implementations/unknown/UnknownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export function computeUnknownsNames(
	segments: readonly [
		SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames = segments
		.filter((segment) => {
			return (
				segment instanceof UnknownFunctionCallSegmentAbstractSyntaxTreeNode
			);
		})
		.map((segment) => {
			return segment.name;
		});
	return knownsNames;
}
