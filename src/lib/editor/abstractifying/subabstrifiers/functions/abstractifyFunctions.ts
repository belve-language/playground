import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import {functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/functions-separated-rest-functions/kind-name/functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/functions/FunctionsConcreteSyntaxTreeNode.ts";
import {functionsConcreteSyntaxTreeNodeKindName} from "../../../concrete-syntax-tree/node/kinds/functions/kind-name/functionsConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunction} from "../function/subabstractifyFunction.ts";
import {subabstractifyFunctionsSeparatedRestFunctions} from "../functions-separated-rest-functions/subabstractifyFunctionsSeparatedRestFunctions.ts";
export function subabstractifyFunctions(
	functions: FunctionsConcreteSyntaxTreeNode,
): readonly [
	FunctionAbstractSyntaxTreeNode,
	...FunctionAbstractSyntaxTreeNode[],
] {
	const [functionsFirstFunction, functionsRestFunctions] =
		functions.data.children;
	const abstractifiedFunctionsFirstFunction: FunctionAbstractSyntaxTreeNode =
		subabstractifyFunction(functionsFirstFunction);
	if (functionsRestFunctions === null) {
		return [abstractifiedFunctionsFirstFunction] as const;
	}
	switch (functionsRestFunctions.kindName) {
		case functionsSeparatedRestFunctionsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedFunctionsRestFunctions =
				subabstractifyFunctionsSeparatedRestFunctions(functionsRestFunctions);
			return [
				abstractifiedFunctionsFirstFunction,
				...abstractifiedFunctionsRestFunctions,
			] as const;
		}
		case functionsConcreteSyntaxTreeNodeKindName: {
			const abstractifiedFunctionsRestFunctions: readonly [
				FunctionAbstractSyntaxTreeNode,
				...FunctionAbstractSyntaxTreeNode[],
			] = subabstractifyFunctions(functionsRestFunctions);
			return [
				abstractifiedFunctionsFirstFunction,
				...abstractifiedFunctionsRestFunctions,
			] as const;
		}
	}
}
