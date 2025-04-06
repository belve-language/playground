import type {BlockAbstractSyntaxTreeNode} from "../../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../OperatedStatementAbstractSyntaxTreeNode.ts";
export function createOperatedStatementAbstractSyntaxTreeNode(
	operator: Operator,
	statement: BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
): OperatedStatementAbstractSyntaxTreeNode {
	const treeNode: OperatedStatementAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			operatedStatementAbstractSyntaxTreeNodeTypeName,
			{operator, statement} as const,
		);
	return treeNode;
}
