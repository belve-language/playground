import type {OperatedStatementAbstractSyntaxTreeNode} from "../lib/core/abstract-syntax-tree-node/implementations/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../lib/core/abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
export type Statements = {
	finalStatement: SupportedStatementAbstractSyntaxTreeNode;
	initialOperatedStatements: readonly OperatedStatementAbstractSyntaxTreeNode[];
};
