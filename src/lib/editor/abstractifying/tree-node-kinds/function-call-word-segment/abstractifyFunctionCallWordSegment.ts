import {createFunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/creating/createFunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {abstractifyIdentifier} from "../identifier/abstractifyIdentifier.ts";
export function abstractifyFunctionCallWordSegment(
	segment: FunctionCallWordSegmentConcreteSyntaxTreeNode,
): FunctionCallWordSegmentAbstractSyntaxTreeNode {
	const [segmentIdentifier] = segment.data.children;
	const abstractifiedSegmentIdentifier =
		abstractifyIdentifier(segmentIdentifier);
	const abstractifiedSegment: FunctionCallWordSegmentAbstractSyntaxTreeNode =
		createFunctionCallWordSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentIdentifier,
		);
	return abstractifiedSegment;
}
