import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import {createFunctionBodyAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-body/creating/createFunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionBodyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/function-body/FunctionBodyConcreteSyntaxTreeNode.ts";
import {subabstractifyBlock} from "../block/subsubabstractifyBlock.ts";
export function subabstractifyFunctionBody(
	functionBody: FunctionBodyConcreteSyntaxTreeNode,
): FunctionBodyAbstractSyntaxTreeNode {
	const [functionBodyBlock] = functionBody.data.children;
	const abstractifiedFunctionBodyBlock: BlockAbstractSyntaxTreeNode =
		subabstractifyBlock(functionBodyBlock);
	const abstractifiedFunctionBody: FunctionBodyAbstractSyntaxTreeNode =
		createFunctionBodyAbstractSyntaxTreeNode(abstractifiedFunctionBodyBlock);
	return abstractifiedFunctionBody;
}
