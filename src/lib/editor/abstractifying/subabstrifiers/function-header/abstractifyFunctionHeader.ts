import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import {createFunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header/creating/createFunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import {subabstractifyFunctionHeaderSegments} from "../function-header-segments/subabstractifyFunctionHeaderSegments.ts";
export function subabstractifyFunctionHeader(
	functionHeader: FunctionHeaderConcreteSyntaxTreeNode,
): FunctionHeaderAbstractSyntaxTreeNode {
	const [functionHeaderSegments] = functionHeader.data.children;
	const abstractifiedFunctionHeaderSegments: readonly [
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
	] = subabstractifyFunctionHeaderSegments(functionHeaderSegments);
	return createFunctionHeaderAbstractSyntaxTreeNode(
		abstractifiedFunctionHeaderSegments,
	);
}
