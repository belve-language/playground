import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-known-starting-segments/kind-name/functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-starting-segments/kind-name/functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-word-starting-segments/FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode.ts";
import {functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/function-header-word-starting-segments/kind-name/functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionHeaderKnownStartingSegments} from "../function-header-known-starting-segments/abstractifyFunctionHeaderKnownStartingSegments.ts";
import {abstractifyFunctionHeaderUnknownStartingSegments} from "../function-header-unknown-starting-segments/abstractifyFunctionHeaderUnknownStartingSegments.ts";
import {abstractifyFunctionHeaderWordStartingSegments} from "../function-header-word-starting-segments/abstractifyFunctionHeaderWordStartingSegments.ts";
export function abstractifyFunctionHeaderSegments(
	segments:
		| FunctionHeaderWordStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNode
		| FunctionHeaderKnownStartingSegmentsConcreteSyntaxTreeNode,
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
	switch (segments.typeName) {
		case functionHeaderWordStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionHeaderWordSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderWordStartingSegments(segments);
			return abstractifiedSegments;
		}
		case functionHeaderKnownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionHeaderKnownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderKnownStartingSegments(segments);
			return abstractifiedSegments;
		}
		case functionHeaderUnknownStartingSegmentsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedSegments: readonly [
				FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode,
				...(
					| FunctionHeaderWordSegmentAbstractSyntaxTreeNode
					| FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode
					| FunctionHeaderKnownSegmentAbstractSyntaxTreeNode
				)[],
			] = abstractifyFunctionHeaderUnknownStartingSegments(segments);
			return abstractifiedSegments;
		}
	}
}
