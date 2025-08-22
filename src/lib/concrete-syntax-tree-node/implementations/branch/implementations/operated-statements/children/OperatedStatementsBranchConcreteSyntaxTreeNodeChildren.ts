import type {OperatedStatementBranchConcreteSyntaxTreeNode} from "../../operated-statement/OperatedStatementBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode} from "../../separated-operated-statements/SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode.ts";
export type OperatedStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	separatedOperatedStatements: null | SeparatedOperatedStatementsBranchConcreteSyntaxTreeNode,
	operatedStatement: OperatedStatementBranchConcreteSyntaxTreeNode,
];
