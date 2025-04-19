import {createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/creating/createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionHeaderKnownSegmentContent} from "../function-header-known-segment-content/abstractifyFunctionHeaderKnownSegmentContent.ts";
export function abstractifyFunctionHeaderKnownSegment(
	segment: FunctionHeaderKnownSegmentConcreteSyntaxTreeNode,
): FunctionHeaderKnownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.data.children;
	if (
		segmentContent === null
		|| segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		throw new Error(
			"Unexpected whitespace characters in function header known segment.",
		);
	}
	const abstractifiedSegmentContent =
		abstractifyFunctionHeaderKnownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionHeaderKnownSegmentAbstractSyntaxTreeNode =
		createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentContent,
		);
	return abstractifiedSegment;
}
