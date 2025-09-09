import type {OperatedStatementAbstractSyntaxTreeNode} from "../lib/abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../lib/abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
export type Statements = {
	initialOperatedStatements: readonly OperatedStatementAbstractSyntaxTreeNode[];
	lastStatement: SupportedStatementAbstractSyntaxTreeNode;
};
