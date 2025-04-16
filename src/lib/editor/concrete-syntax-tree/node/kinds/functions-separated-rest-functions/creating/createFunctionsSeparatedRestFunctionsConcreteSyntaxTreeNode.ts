import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "./FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName} from "./functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName,
		[whitespace, functions] as const,
		spanIndexes,
	);
}
