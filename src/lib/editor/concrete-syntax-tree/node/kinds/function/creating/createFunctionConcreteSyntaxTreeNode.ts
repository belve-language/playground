import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../FunctionConcreteSyntaxTreeNode.ts";
import {functionConcreteSyntaxTreeNodeKindName} from "../kind-name/functionConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionConcreteSyntaxTreeNode(
	children: FunctionConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
