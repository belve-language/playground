import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
export type StatementsAbstractSyntaxTreeNodeChildren = {
	readonly lastStatement: SupportedStatementAbstractSyntaxTreeNode;
	readonly operatedStatements: readonly OperatedStatementAbstractSyntaxTreeNode[];
};
