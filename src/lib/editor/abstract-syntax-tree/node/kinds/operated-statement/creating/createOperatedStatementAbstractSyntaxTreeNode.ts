import type {BlockAbstractSyntaxTreeNode} from "../../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../OperatedStatementAbstractSyntaxTreeNode.ts";
export function createOperatedStatementAbstractSyntaxTreeNode(
	children,
): OperatedStatementAbstractSyntaxTreeNode {
	const treeNode: OperatedStatementAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			operatedStatementAbstractSyntaxTreeNodeKindName,
			{operator, statement} as const,
		);
	return treeNode;
}
