import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-segments-separated-rest-segments/functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/abstractifyFunctionCallKnownStartingSegments.ts";
import {abstractifyFunctionCallSegmentsSeparatedRestSegments} from "../function-call-segments-separated-rest-segments/abstractifyFunctionCallSegmentsSeparatedRestSegments.ts";
import {abstractifyFunctionCallUnknownSegment} from "../function-call-unknown-segment/abstractifyFunctionCallUnknownSegment.ts";
import {abstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/abstractifyFunctionCallWordStartingSegments.ts";
export function abstractifyFunctionCallUnknownStartingSegments(
	segments: FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionCallUnknownSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionCallWordSegmentAbstractSyntaxTreeNode
		| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
		| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.data.children;
	const abstractifiedSegmentsFirstSegment: FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
		abstractifyFunctionCallUnknownSegment(segmentsFirstSegment);
	if (segmentsRestSegments === null) {
		return [abstractifiedSegmentsFirstSegment] as const;
	}
	switch (segmentsRestSegments.typeName) {
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallKnownStartingSegments(segmentsRestSegments);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallUnknownStartingSegments(segmentsRestSegments);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallWordStartingSegments(segmentsRestSegments);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
		case functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				),
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] =
				abstractifyFunctionCallSegmentsSeparatedRestSegments(
					segmentsRestSegments,
				);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
	}
}
