import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {abstractifyFunctions} from "../functions/abstractifyFunctions.ts";
export function abstractifyFunctionsSeparatedRestFunctions(
	functionsSeparatedRestFunctions: FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode,
): readonly [
	FunctionAbstractSyntaxTreeNode,
	...FunctionAbstractSyntaxTreeNode[],
] {
	const [, functionsSeparatedRestFunctionsFunctions] =
		functionsSeparatedRestFunctions.data.children;
	const abstractifiedFunctionsSeparatedRestFunctions: readonly [
		FunctionAbstractSyntaxTreeNode,
		...FunctionAbstractSyntaxTreeNode[],
	] = abstractifyFunctions(functionsSeparatedRestFunctionsFunctions);
	return abstractifiedFunctionsSeparatedRestFunctions;
}
