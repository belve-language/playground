import type {FunctionBodyAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {createFunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/creating/createFunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function/FunctionConcreteSyntaxTreeNode.ts";
import {subabstractifyFunctionBody} from "../function-body/subabstractifyFunctionBody.ts";
import {subabstractifyFunctionHeader} from "../function-header/subabstractifyFunctionHeader.ts";
export function subabstractifyFunction(
	function_: FunctionConcreteSyntaxTreeNode,
): FunctionAbstractSyntaxTreeNode {
	const [functionHeader, functionBody] = function_.data.children;
	if (functionHeader === null) {
		const abstractifiedFunctionBody: FunctionBodyAbstractSyntaxTreeNode =
			subabstractifyFunctionBody(functionBody);
		const abstractifiedFunction: FunctionAbstractSyntaxTreeNode =
			createFunctionAbstractSyntaxTreeNode(null, abstractifiedFunctionBody);
		return abstractifiedFunction;
	}
	const abstractifiedFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode =
		subabstractifyFunctionHeader(functionHeader);
	const abstractifiedFunctionBody: FunctionBodyAbstractSyntaxTreeNode =
		subabstractifyFunctionBody(functionBody);
	const abstractifiedFunction: FunctionAbstractSyntaxTreeNode =
		createFunctionAbstractSyntaxTreeNode(
			abstractifiedFunctionHeader,
			abstractifiedFunctionBody,
		);
	return abstractifiedFunction;
}
