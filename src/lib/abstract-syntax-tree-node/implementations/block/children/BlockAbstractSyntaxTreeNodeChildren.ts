import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {StatementAbstractSyntaxTreeNode} from "../../statement/StatementAbstractSyntaxTreeNode.ts";
export type BlockAbstractSyntaxTreeNodeChildren = {
	initialStatement: StatementAbstractSyntaxTreeNode;
	finalOperatedStatements: readonly OperatedStatementAbstractSyntaxTreeNode[];
};
