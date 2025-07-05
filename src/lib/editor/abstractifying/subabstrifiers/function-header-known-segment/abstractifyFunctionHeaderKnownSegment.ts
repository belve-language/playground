import {createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/creating/createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/whitespace/kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionHeaderKnownSegmentContent} from "../function-header-known-segment-content/subabstractifyFunctionHeaderKnownSegmentContent.ts";
export function subabstractifyFunctionHeaderKnownSegment(
	segment: FunctionHeaderKnownSegmentConcreteSyntaxTreeNode,
): FunctionHeaderKnownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.data.children;
	if (
		segmentContent === null
		|| segmentContent.kindName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		throw new Error(
			"Unexpected whitespace characters in function header known segment.",
		);
	}
	const abstractifiedSegmentContent =
		subabstractifyFunctionHeaderKnownSegmentContent(segmentContent);
	const abstractifiedSegment =
		createFunctionHeaderKnownSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentContent,
		);
	return abstractifiedSegment;
}
