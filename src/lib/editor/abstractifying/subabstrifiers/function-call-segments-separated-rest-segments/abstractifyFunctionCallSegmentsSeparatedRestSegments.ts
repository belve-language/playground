import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/kind-name/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-segments-separated-rest-segments/FunctionCallSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/kind-name/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/kind-name/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/subabstractifyFunctionCallKnownStartingSegments.ts";
import {subabstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/subabstractifyFunctionCallUnknownStartingSegments.ts";
import {subabstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/subabstractifyFunctionCallWordStartingSegments.ts";
export function subabstractifyFunctionCallSegmentsSeparatedRestSegments(
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
	switch (segmentsSegments.kindName) {
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = subabstractifyFunctionCallKnownStartingSegments(segmentsSegments);
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
			] = subabstractifyFunctionCallUnknownStartingSegments(segmentsSegments);
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
			] = subabstractifyFunctionCallWordStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
	}
}
