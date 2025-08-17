import type {SeparatedStatementsBranchConcreteSyntaxTreeNode} from "../../separated-statements/SeparatedStatementsBranchConcreteSyntaxTreeNode.ts";
import type {StatementBranchConcreteSyntaxTreeNode} from "../../statement/StatementBranchConcreteSyntaxTreeNode.ts";
export type StatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | SeparatedStatementsBranchConcreteSyntaxTreeNode,
	StatementBranchConcreteSyntaxTreeNode,
];
