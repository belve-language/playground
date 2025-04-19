import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-segments-separated-rest-segments/functionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionHeaderKnownStartingSegments} from "../function-header-known-starting-segments/abstractifyFunctionHeaderKnownStartingSegments.ts";
import {abstractifyFunctionHeaderSegmentsSeparatedRestSegments} from "../function-header-segments-separated-rest-segments/abstractifyFunctionHeaderSegmentsSeparatedRestSegments.ts";
import {abstractifyFunctionHeaderUnknownSegment} from "../function-header-unknown-segment/abstractifyFunctionHeaderUnknownSegment.ts";
import {abstractifyFunctionHeaderWordStartingSegments} from "../function-header-word-starting-segments/abstractifyFunctionHeaderWordStartingSegments.ts";
export function abstractifyFunctionHeaderUnknownStartingSegments(
	segments: FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
		| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
		| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.data.children;
	const abstractifiedSegmentsFirstSegment: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		abstractifyFunctionHeaderUnknownSegment(segmentsFirstSegment);
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
