import {createFunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/creating/createFunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifier} from "../identifier/subabstractifyIdentifier.ts";
export function subabstractifyFunctionCallWordSegment(
	segment: FunctionCallWordSegmentConcreteSyntaxTreeNode,
): FunctionCallWordSegmentAbstractSyntaxTreeNode {
	const [segmentIdentifier] = segment.data.children;
	const abstractifiedSegmentIdentifier =
		subabstractifyIdentifier(segmentIdentifier);
	const abstractifiedSegment: FunctionCallWordSegmentAbstractSyntaxTreeNode =
		createFunctionCallWordSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentIdentifier,
		);
	return abstractifiedSegment;
}
