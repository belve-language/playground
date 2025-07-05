import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/functions-separated-rest-functions/FunctionsSeparatedRestFunctionsConcreteSyntaxTreeNode.ts";
import {subabstractifyFunctions} from "../functions/subabstractifyFunctions.ts";
export function subabstractifyFunctionsSeparatedRestFunctions(
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
	] = subabstractifyFunctions(functionsSeparatedRestFunctionsFunctions);
	return abstractifiedFunctionsSeparatedRestFunctions;
}
