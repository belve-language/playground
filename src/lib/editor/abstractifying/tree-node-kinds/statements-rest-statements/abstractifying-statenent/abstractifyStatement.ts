import type {BlockAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/node/kinds/block/BlockConcreteSyntaxTreeNode.ts";
import {blockConcreteSyntaxTreeNodeKindName} from "../../../../concrete-syntax-tree/node/kinds/block/blockConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/tree-node-types/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import {functionCallConcreteSyntaxTreeNodeKindName} from "../../../../concrete-syntax-tree/tree-node-types/function-call/functionCallConcreteSyntaxTreeNodeKindName.ts";
import {abstractifyBlock} from "../../block/abstractifyBlock.ts";
import {abstractifyFunctionCall} from "../../function-call/abstractifyFunctionCall.ts";
export function abstractifyStatement(
	statement: FunctionCallConcreteSyntaxTreeNode | BlockConcreteSyntaxTreeNode,
): FunctionCallAbstractSyntaxTreeNode | BlockAbstractSyntaxTreeNode {
	switch (statement.typeName) {
		case functionCallConcreteSyntaxTreeNodeKindName: {
			const abstractifiedStatement: FunctionCallAbstractSyntaxTreeNode =
				abstractifyFunctionCall(statement);
			return abstractifiedStatement;
		}
		case blockConcreteSyntaxTreeNodeKindName: {
			const abstractifiedStatement: BlockAbstractSyntaxTreeNode =
				abstractifyBlock(statement);
			return abstractifiedStatement;
		}
	}
}
