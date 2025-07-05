import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/FunctionCallKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-known-starting-segments/kind-name/functionCallKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/FunctionCallUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-starting-segments/kind-name/functionCallUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/FunctionCallWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-call-word-starting-segments/kind-name/functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionCallKnownStartingSegments} from "../function-call-known-starting-segments/subabstractifyFunctionCallKnownStartingSegments.ts";
import {subabstractifyFunctionCallUnknownStartingSegments} from "../function-call-unknown-starting-segments/subabstractifyFunctionCallUnknownStartingSegments.ts";
import {subabstractifyFunctionCallWordStartingSegments} from "../function-call-word-starting-segments/subabstractifyFunctionCallWordStartingSegments.ts";
export function subabstractifyFunctionCallSegments(
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
	switch (segments.kindName) {
		case functionCallWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionCallWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionCallWordSegmentAbstractSyntaxTreeNode
					| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
					| FunctionCallKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = subabstractifyFunctionCallWordStartingSegments(segments);
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
			] = subabstractifyFunctionCallKnownStartingSegments(segments);
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
			] = subabstractifyFunctionCallUnknownStartingSegments(segments);
			return abstractifiedSegments;
		}
	}
}
