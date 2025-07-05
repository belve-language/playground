import {createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/creating/createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode.ts";
import {whitespaceConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/tree-node-types/whitespace/whitespaceConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionHeaderUnknownSegmentContent} from "../function-header-unknown-segment-content/subabstractifyFunctionHeaderUnknownSegmentContent.ts";
export function subabstractifyFunctionHeaderUnknownSegment(
	segment: FunctionHeaderUnknownSegmentConcreteSyntaxTreeNode,
): FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode {
	const [, segmentContent] = segment.data.children;
	if (
		segmentContent === null
		|| segmentContent.typeName === whitespaceConcreteSyntaxTreeNodeKindName
	) {
		throw new Error(
			"Unexpected whitespace characters in function header unknown segment.",
		);
	}
	const abstractifiedSegmentContent =
		subabstractifyFunctionHeaderUnknownSegmentContent(segmentContent);
	const abstractifiedSegment: FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode =
		createFunctionHeaderUnknownSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentContent,
		);
	return abstractifiedSegment;
}
