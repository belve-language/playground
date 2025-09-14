import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export function computeUnknownsNames(
	segments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const unknownsNames = segments
		.filter((segment) => {
			return (
				segment instanceof UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode
			);
		})
		.map((segment) => {
			return segment.children.name;
		});
	return unknownsNames;
}
