import {createFunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/creating/createFunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallKnownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/whitespace/kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionCallKnownSegmentContent} from "../function-call-known-segment-content/subabstractifyFunctionCallKnownSegmentContent.ts";
export function subabstractifyFunctionCallKnownSegment(
	segment: FunctionCallKnownSegmentConcreteSyntaxTreeNode,
): FunctionCallKnownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.data.children;
	if (
		segmentContent === null
		|| segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		throw new Error(
			"Unexpected whitespace characters in function call known segment.",
		);
	}
	const abstractifiedSegmentContent: Identifier =
		subabstractifyFunctionCallKnownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionCallKnownSegmentAbstractSyntaxTreeNode =
		createFunctionCallKnownSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentContent,
		);
	return abstractifiedSegment;
}
