import {KnownFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/implementations/known/KnownFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
import type {SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode} from "../../function-header-segment/supported/SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode.ts";
export function computeKnownsNames(
	segments: readonly [
		SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
		...(readonly SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode[]),
	],
): readonly string[] {
	const knownsNames: readonly string[] = segments
		.filter(
			(
				segment: SupportedFunctionHeaderSegmentAbstractSyntaxTreeNode,
			): segment is KnownFunctionHeaderSegmentAbstractSyntaxTreeNode => {
				return (
					segment instanceof KnownFunctionHeaderSegmentAbstractSyntaxTreeNode
				);
			},
		)
		.map(
			(segment: KnownFunctionHeaderSegmentAbstractSyntaxTreeNode): string => {
				return segment.children.name;
			},
		);
	return knownsNames;
}
