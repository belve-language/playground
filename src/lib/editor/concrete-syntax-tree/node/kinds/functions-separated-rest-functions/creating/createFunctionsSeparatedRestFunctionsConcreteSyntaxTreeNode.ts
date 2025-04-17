import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../../types/branch/creating/createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren} from "../children/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName} from "../kind-name/functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
	children: FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNodeChildren,
	spanIndexes: SpanIndexes,
): FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName,
		{children, spanIndexes},
	);
}
