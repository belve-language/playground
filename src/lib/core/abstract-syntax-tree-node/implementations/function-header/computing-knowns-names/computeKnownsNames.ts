import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export function computeKnownsNames(
	segments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames = segments
		.filter((segment) => {
			return (
				segment instanceof KnownFunctionHeaderSegmentAbstractSyntaxTreeNode
			);
		})
		.map((segment) => {
			return segment.name;
		});
	return knownsNames;
}
