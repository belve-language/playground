import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {createBranchConcreteSyntaxTreeNode} from "../../createBranchConcreteSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../function/FunctionConcreteSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "./FunctionsConcreteSyntaxTreeNode.ts";
import {functionsConcreteSyntaxTreeNodeKindName} from "./functionsConcreteSyntaxTreeNodeKindName.ts";
export function createFunctionsConcreteSyntaxTreeNode(
	spanIndexes: SpanIndexes,
): FunctionsConcreteSyntaxTreeNode {
	return createBranchConcreteSyntaxTreeNode(
		functionsConcreteSyntaxTreeNodeKindName,
		[firstFunction, restFunctions] as const,
		spanIndexes,
	);
}
