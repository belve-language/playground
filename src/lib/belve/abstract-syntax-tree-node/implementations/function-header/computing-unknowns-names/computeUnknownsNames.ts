import {UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/implementations/unknown/UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export function computeUnknownsNames(
	segments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const unknownsNames: readonly string[] = segments
		.filter(
			(
				segment: SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
			): segment is UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode => {
				return (
					segment instanceof UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode
				);
			},
		)
		.map(
			(segment: UnknownFunctionHeaderSegmentAbstractSyntaxTreeNode): string => {
				return segment.children.name;
			},
		);
	return unknownsNames;
}
