import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../../../supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
export type IntermediateStatementsAbstractSyntaxTreeNodeChildren = {
	readonly operatedStatement: OperatedStatementAbstractSyntaxTreeNode;
	readonly restStatements: SupportedStatementsAbstractSyntaxTreeNode;
};
