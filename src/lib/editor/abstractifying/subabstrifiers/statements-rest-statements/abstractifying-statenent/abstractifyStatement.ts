import type {BlockAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {BlockConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/node/kinds/block/BlockConcreteSyntaxTreeNode.ts";
import {blockConcreteSyntaxTreeNodeKindName} from "../../../../concrete-syntax-tree/node/kinds/block/kind-name/blockConcreteSyntaxTreeNodeKindName.ts";
import type {FunctionCallConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/node/kinds/function-call/FunctionCallConcreteSyntaxTreeNode.ts";
import {functionCallConcreteSyntaxTreeNodeKindName} from "../../../../concrete-syntax-tree/node/kinds/function-call/kind-name/functionCallConcreteSyntaxTreeNodeKindName.ts";
import {subabstractifyFunctionCall} from "../../function-call/subabstractifyFunctionCall.ts";
export function subabstractifyStatement(
	statement: FunctionCallConcreteSyntaxTreeNode | BlockConcreteSyntaxTreeNode,
): FunctionCallAbstractSyntaxTreeNode | BlockAbstractSyntaxTreeNode {
	switch (statement.kindName) {
		case functionCallConcreteSyntaxTreeNodeKindName: {
			const abstractifiedStatement: FunctionCallAbstractSyntaxTreeNode =
				subabstractifyFunctionCall(statement);
			return abstractifiedStatement;
		}
		case blockConcreteSyntaxTreeNodeKindName: {
			const abstractifiedStatement: BlockAbstractSyntaxTreeNode =
				subabstractifyBlock(statement);
			return abstractifiedStatement;
		}
	}
}
