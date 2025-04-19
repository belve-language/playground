import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/abstractifyFunctionCallKnownStartingSegments.ts";
import {abstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/abstractifyFunctionCallUnknownStartingSegments.ts";
import {abstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/abstractifyFunctionCallWordStartingSegments.ts";
export function abstractifyFunctionCallSegmentsSeparatedRestSegments(
	segments: FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
): readonly [
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
] {
	const [, segmentsSegments] = segments.data.children;
	switch (segmentsSegments.typeName) {
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallKnownStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallUnknownStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallWordStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
	}
}
