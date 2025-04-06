import type {FunctionBodyAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {createFunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/createFunctionAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function/FunctionAbstractSyntaxTreeNode.ts";
import type {FunctionConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/tree-node-types/function/FunctionConcreteSyntaxTreeNode.ts";
import {abstractifyFunctionBody} from "../function-body/abstractifyFunctionBody.ts";
import {abstractifyFunctionHeader} from "../function-header/abstractifyFunctionHeader.ts";
export function abstractifyFunction(
	function_: FunctionConcreteSyntaxTreeNode,
): FunctionAbstractSyntaxTreeNode {
	const [functionHeader, functionBody] = function_.data.children;
	if (functionHeader === null) {
		const abstractifiedFunctionBody: FunctionBodyAbstractSyntaxTreeNode =
			abstractifyFunctionBody(functionBody);
		const abstractifiedFunction: FunctionAbstractSyntaxTreeNode =
			createFunctionAbstractSyntaxTreeNode(null, abstractifiedFunctionBody);
		return abstractifiedFunction;
	}
	const abstractifiedFunctionHeader: FunctionHeaderAbstractSyntaxTreeNode =
		abstractifyFunctionHeader(functionHeader);
	const abstractifiedFunctionBody: FunctionBodyAbstractSyntaxTreeNode =
		abstractifyFunctionBody(functionBody);
	const abstractifiedFunction: FunctionAbstractSyntaxTreeNode =
		createFunctionAbstractSyntaxTreeNode(
			abstractifiedFunctionHeader,
			abstractifiedFunctionBody,
		);
	return abstractifiedFunction;
}
