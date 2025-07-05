import {createFunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/creating/createFunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentConcreteSyntaxTreeNode.ts";
import {subabstractifyIdentifier} from "../identifier/subabstractifyIdentifier.ts";
export function subabstractifyFunctionHeaderWordSegment(
	segment: FunctionHeaderWordSegmentConcreteSyntaxTreeNode,
): FunctionHeaderWordSegmentAbstractSyntaxTreeNode {
	const [segmentIdentifier] = segment.data.children;
	const abstractifiedSegmentIdentifier =
		subabstractifyIdentifier(segmentIdentifier);
	const abstractifiedSegment: FunctionHeaderWordSegmentAbstractSyntaxTreeNode =
		createFunctionHeaderWordSegmentAbstractSyntaxTreeNode(
			abstractifiedSegmentIdentifier,
		);
	return abstractifiedSegment;
}
