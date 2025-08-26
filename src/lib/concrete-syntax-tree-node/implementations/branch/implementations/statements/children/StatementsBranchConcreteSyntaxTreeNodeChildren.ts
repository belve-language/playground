import type {SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode} from "../../separated-operated-statements/SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode.ts";
import type {StatementBranchConcreteSyntaxTreeNode} from "../../statement/StatementBranchConcreteSyntaxTreeNode.ts";
export type StatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	separatedOperatedStatements: null | SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode,
	statement: StatementBranchConcreteSyntaxTreeNode,
];
