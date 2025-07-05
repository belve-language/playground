import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/kind-name/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-segments-separated-rest-segments/kind-name/functionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/kind-name/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {subabstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/subabstractifyFunctionCallKnownStartingSegments.ts";
import {subabstractifyFunctionCallSegmentsSeparatedRestSegments} from "../function-call-segments-separated-rest-segments/subabstractifyFunctionCallSegmentsSeparatedRestSegments.ts";
import {subabstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/subabstractifyFunctionCallUnknownStartingSegments.ts";
import {subabstractifyFunctionCallWordSegment} from "../function-call-word-segment/subabstractifyFunctionCallWordSegment.ts";
export function subabstractifyFunctionCallWordStartingSegments(
	segments: FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode,
): readonly [
	FunctionCallWordSegmentAbstractSyntaxTreeNode,
	...(
		| FunctionCallWordSegmentAbstractSyntaxTreeNode
		| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
		| FunctionCallKnownSegmentAbstractSyntaxTreeNode
	)[],
] {
	const [segmentsFirstSegment, segmentsRestSegments] = segments.data.children;
	const abstractifiedSegmentsFirstSegment =
		subabstractifyFunctionCallWordSegment(segmentsFirstSegment);
	if (segmentsRestSegments === null) {
		return [abstractifiedSegmentsFirstSegment] as const;
	}
	switch (segmentsRestSegments.kindName) {
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = subabstractifyFunctionCallKnownStartingSegments(segmentsRestSegments);
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
			] =
				subabstractifyFunctionCallUnknownStartingSegments(segmentsRestSegments);
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
				subabstractifyFunctionCallSegmentsSeparatedRestSegments(
					segmentsRestSegments,
				);
			return [
				abstractifiedSegmentsFirstSegment,
				...abstractifiedSegmentsRestSegments,
			] as const;
		}
	}
}
