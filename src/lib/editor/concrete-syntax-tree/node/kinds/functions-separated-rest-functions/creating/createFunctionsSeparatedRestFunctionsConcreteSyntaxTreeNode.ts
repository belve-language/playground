import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren} from "../data-children/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
	children: FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeDataChildren,
	spanIndexes: SpanIndexes,
): FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
