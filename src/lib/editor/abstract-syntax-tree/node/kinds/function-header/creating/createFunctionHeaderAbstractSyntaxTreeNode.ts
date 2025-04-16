import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../FunctionHeaderAbstractSyntaxTreeNode.ts";
export function createFunctionHeaderAbstractSyntaxTreeNode(
	children,
): FunctionHeaderAbstractSyntaxTreeNode {
	const treeNode: FunctionHeaderAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(functionHeaderAbstractSyntaxTreeNodeKindName, {
			segments,
		} as const);
	return treeNode;
}
