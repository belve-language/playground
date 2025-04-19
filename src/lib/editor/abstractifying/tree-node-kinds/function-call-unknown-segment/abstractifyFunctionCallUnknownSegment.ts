import {createFunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/creating/createFunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyFunctionCallUnknownSegmentContent} from "../function-call-unknown-segment-content/abstractifyFunctionCallUnknownSegmentContent.ts";
export function abstractifyFunctionCallUnknownSegment(
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
	const abstractifiedSegmentContent: Identifier =
		abstractifyFunctionCallUnknownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionCallUnknownSegmentAbstractSyntaxTreeNode =
		createFunctionCallUnknownSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentContent,
		);
	return abstractifiedSegment;
}
