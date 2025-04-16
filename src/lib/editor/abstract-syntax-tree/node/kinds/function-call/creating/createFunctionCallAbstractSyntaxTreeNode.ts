import type {FunctionCallKnownSegmentAbstractSyntaxTreeNode} from "../../function-call-known-segment/FunctionCallKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallUnknownSegmentAbstractSyntaxTreeNode} from "../../function-call-unknown-segment/FunctionCallUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallWordSegmentAbstractSyntaxTreeNode} from "../../function-call-word-segment/FunctionCallWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../FunctionCallAbstractSyntaxTreeNode.ts";
export function createFunctionCallAbstractSyntaxTreeNode(
	children,
): FunctionCallAbstractSyntaxTreeNode {
	const treeNode: FunctionCallAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(functionCallAbstractSyntaxTreeNodeKindName, {
			segments,
		} as const);
	return treeNode;
}
