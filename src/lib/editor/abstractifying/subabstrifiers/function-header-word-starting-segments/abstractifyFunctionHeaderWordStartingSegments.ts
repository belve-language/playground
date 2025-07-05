import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/kind-name/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-segments-separated-rest-segments/kind-name/functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/kind-name/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {subabstractifyFunctionHeaderKnownStartingSegments} from "../function-header-known-starting-segments/subabstractifyFunctionHeaderKnownStartingSegments.ts";
import {subabstractifyFunctionHeaderSegmentsSeparatedRestSegments} from "../function-header-segments-separated-rest-segments/subabstractifyFunctionHeaderSegmentsSeparatedRestSegments.ts";
import {subabstractifyFunctionHeaderUnknownStartingSegments} from "../function-header-unknown-starting-segments/subabstractifyFunctionHeaderUnknownStartingSegments.ts";
import {subabstractifyFunctionHeaderWordSegment} from "../function-header-word-segment/subabstractifyFunctionHeaderWordSegment.ts";
export function subabstractifyFunctionHeaderWordStartingSegments(
	segments: FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionHeaderWordSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
		| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
		| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.data.children;
	const abstractifiedSegmentsFirstSegment =
		subabstractifyFunctionHeaderWordSegment(segmentsFirstSegment);
	if (segmentsRestSegments === null) {
		return [abstractifiedSegmentsFirstSegment] as const;
	}
	switch (segmentsRestSegments.kindName) {
		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] =
				subabstractifyFunctionHeaderKnownStartingSegments(segmentsRestSegments);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
		case functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] =
				subabstractifyFunctionHeaderUnknownStartingSegments(
					segmentsRestSegments,
				);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
		case functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				),
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] =
				subabstractifyFunctionHeaderSegmentsSeparatedRestSegments(
					segmentsRestSegments,
				);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
	}
}
