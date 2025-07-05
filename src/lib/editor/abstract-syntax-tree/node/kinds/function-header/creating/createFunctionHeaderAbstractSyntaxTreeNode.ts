import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import { createBranchAbstractSyntaxTreeNode } from "../../../types/branch/creating/createBranchAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderKnownSegmentAbstractSyntaxTreeNode} from "../../function-header-known-segment/FunctionHeaderKnownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode} from "../../function-header-unknown-segment/FunctionHeaderUnknownSegmentAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderWordSegmentAbstractSyntaxTreeNode} from "../../function-header-word-segment/FunctionHeaderWordSegmentAbstractSyntaxTreeNode.ts";
import type { FunctionHeaderAbstractSyntaxTreeNodeDataChildren } from "../data-children/FunctionHeaderAbstractSyntaxTreeNodeDataChildren.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../FunctionHeaderAbstractSyntaxTreeNode.ts";
import { functionHeaderAbstractSyntaxTreeNodeKindName } from "../kind-name/functionHeaderAbstractSyntaxTreeNodeKindName.ts";
export function createFunctionHeaderAbstractSyntaxTreeNode(
	children: FunctionHeaderAbstractSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionHeaderAbstractSyntaxTreeNode {
	return createBranchAbstractSyntaxTreeNode(
		functionHeaderAbstractSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
