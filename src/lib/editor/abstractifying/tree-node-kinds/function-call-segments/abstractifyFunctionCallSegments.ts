import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/abstractifyFunctionCallKnownStartingSegments.ts";
import {abstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/abstractifyFunctionCallUnknownStartingSegments.ts";
import {abstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/abstractifyFunctionCallWordStartingSegments.ts";
export function abstractifyFunctionCallSegments(
	segments:
		| FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode,
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
	switch (segments.typeName) {
		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionCallWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallWordStartingSegments(segments);
			return abstractifiedSegments;
		}
		case functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionCallKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallKnownStartingSegments(segments);
			return abstractifiedSegments;
		}
		case functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionCallUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionCallUnknownStartingSegments(segments);
			return abstractifiedSegments;
		}
	}
}
