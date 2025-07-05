import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchAbstractSyntaxTreeNode} from "../../../types/branch/creating/createBranchAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../FunctionAbstractSyntaxTreeNode.ts";
import {functionAbstractSyntaxTreeNodeKindName} from "../kind-name/functionAbstractSyntaxTreeNodeKindName.ts";
export function createFunctionAbstractSyntaxTreeNode(
	children: FunctionAbstractSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionAbstractSyntaxTreeNode {
	return createBranchAbstractSyntaxTreeNode(
		functionAbstractSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
