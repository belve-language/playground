import {KnownFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../function-call-segment/implementations/known/KnownFunctionCallSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionCallSegmentAbstractSyntaxTreeNode} from "../../../../function-call-segment/supported/SupportedFunctionCallSegmentAbstractSyntaxTreeNode.ts";
export function computeKnownsNames(
	segments: readonly [
		SupportedFunctionCallSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionCallSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames = segments
		.filter((segment) => {
			return segment instanceof KnownFunctionCallSegmentAbstractSyntaxTreeNode;
		})
		.map((segment) => {
			return segment.name;
		});
	return knownsNames;
}
