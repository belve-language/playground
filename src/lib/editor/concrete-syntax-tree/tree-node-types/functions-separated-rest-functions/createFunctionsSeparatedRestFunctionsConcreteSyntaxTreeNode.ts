import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../functions/FunctionsConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "./FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName} from "./functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName.ts";
export function createFunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode(
	whitespace: WhitespaceConcreteSyntaxTreeNode,
	functions: FunctionsConcreteSyntaxTreeNode,
	spanIndexes: SpanIndexes,
): FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeTypeName,
		[whitespace, functions] as const,
		spanIndexes,
	);
}
