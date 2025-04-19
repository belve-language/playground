import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/kind-name/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-segments-separated-rest-segments/kind-name/functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/kind-name/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-word-starting-segments/kind-name/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionHeaderKnownSegment} from "../function-header-known-segment/abstractifyFunctionHeaderKnownSegment.ts";
import {abstractifyFunctionHeaderSegmentsSeparatedRestSegments} from "../function-header-segments-separated-rest-segments/abstractifyFunctionHeaderSegmentsSeparatedRestSegments.ts";
import {abstractifyFunctionHeaderUnknownStartingSegments} from "../function-header-unknown-starting-segments/abstractifyFunctionHeaderUnknownStartingSegments.ts";
import {abstractifyFunctionHeaderWordStartingSegments} from "../function-header-word-starting-segments/abstractifyFunctionHeaderWordStartingSegments.ts";
export function abstractifyFunctionHeaderKnownStartingSegments(
	segments: FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionHeaderKnownSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
		| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
		| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.data.children;
	const abstractifiedSegmentsFirstSegment: FunctionHeaderKnownSegmentAbstractSyntaxTreeNode =
		abstractifyFunctionHeaderKnownSegment(segmentsFirstSegment);
	if (segmentsRestSegments === null) {
		return [abstractifiedSegmentsFirstSegment] as const;
	}
	switch (segmentsRestSegments.typeName) {
		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderKnownStartingSegments(segmentsRestSegments);
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
				abstractifyFunctionHeaderUnknownStartingSegments(segmentsRestSegments);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
		case functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderWordStartingSegments(segmentsRestSegments);
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
				abstractifyFunctionHeaderSegmentsSeparatedRestSegments(
					segmentsRestSegments,
				);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
	}
}
