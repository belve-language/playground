import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
export type IntermediateStatementsAbstractSyntaxTreeNodeChildren = {
	readonly operatedStatement: OperatedStatementAbstractSyntaxTreeNode;
	readonly statementsRest: SupportedStatementsAbstractSyntaxTreeNode;
};
