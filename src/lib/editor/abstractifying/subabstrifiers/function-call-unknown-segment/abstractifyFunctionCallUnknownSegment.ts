import {createFunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/creating/createFunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/whitespace/kind-name/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionCallUnknownSegmentContent} from "../function-call-unknown-segment-content/subabstractifyFunctionCallUnknownSegmentContent.ts";
export function subabstractifyFunctionCallUnknownSegment(
	segment: FunctionCallUnknownSegmentConcreteSyntaxTreeNode,
): FunctionCallUnknownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.data.children;
	if (
		segmentContent === null
		|| segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		throw new Error(
			"Unexpected whitespace characters in function call unknown segment.",
		);
	}
	const abstractifiedSegmentContent =
		subabstractifyFunctionCallUnknownSegmentContent(segmentContent);
	const abstractifiedSegment =
		createFunctionCallUnknownSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentContent,
		);
	return abstractifiedSegment;
}
