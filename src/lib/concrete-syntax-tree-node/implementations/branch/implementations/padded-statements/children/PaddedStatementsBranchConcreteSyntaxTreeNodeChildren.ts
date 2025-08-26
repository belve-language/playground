import type {StatementsBranchConcreteSyntaxTreeNode} from "../../statements/StatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type PaddedStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	whitespace1: null | WhitespaceBranchConcreteSyntaxTreeNode,
	statements: StatementsBranchConcreteSyntaxTreeNode,
	whitespace2: null | WhitespaceBranchConcreteSyntaxTreeNode,
];
