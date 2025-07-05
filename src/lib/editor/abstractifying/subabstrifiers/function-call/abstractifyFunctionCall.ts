import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import {createFunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/creating/createFunctionCallAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import {subabstractifyFunctionCallSegments} from "../function-call-segments/subabstractifyFunctionCallSegments.ts";
export function subabstractifyFunctionCall(
	functionCall: FunctionCallConcreteSyntaxTreeNode,
): FunctionCallAbstractSyntaxTreeNode {
	const [functionCallSegments] = functionCall.data.children;
	const abstractifiedFunctionCallSegments: readonly [
		(
			| FunctionCallWordSegmentAbstractSyntaxTreeNode
			| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
			| FunctionCallKnownSegmentAbstractSyntaxTreeNode
		),
		...(
			| FunctionCallWordSegmentAbstractSyntaxTreeNode
			| FunctionCallUnknownSegmentAbstractSyntaxTreeNode
			| FunctionCallKnownSegmentAbstractSyntaxTreeNode
		)[],
	] = subabstractifyFunctionCallSegments(functionCallSegments);
	const abstractifiedFunctionCall = createFunctionCallAbstractSyntaxTreeNode(
		abstractifiedFunctionCallSegments,
	);
	return abstractifiedFunctionCall;
}
