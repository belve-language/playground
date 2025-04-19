import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-segments-separated-rest-segments/FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/tree-node-types/function-header-word-starting-segments/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionHeaderKnownStartingSegments} from "../function-header-known-starting-segments/abstractifyFunctionHeaderKnownStartingSegments.ts";
import {abstractifyFunctionHeaderUnknownStartingSegments} from "../function-header-unknown-starting-segments/abstractifyFunctionHeaderUnknownStartingSegments.ts";
import {abstractifyFunctionHeaderWordStartingSegments} from "../function-header-word-starting-segments/abstractifyFunctionHeaderWordStartingSegments.ts";
export function abstractifyFunctionHeaderSegmentsSeparatedRestSegments(
	segments: FunctionHeaderSegmentsSeparatedRestSegmentsConcreteSyntaxTreeNode,
): readonly [
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
] {
	const [, segmentsSegments] = segments.data.children;
	switch (segmentsSegments.typeName) {
		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderKnownStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
		case functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderUnknownStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
		case functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegmentsRestSegments: readonly [
				FunctionHeaderWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderWordStartingSegments(segmentsSegments);
			return abstractifiedSegmentsRestSegments;
		}
	}
}
