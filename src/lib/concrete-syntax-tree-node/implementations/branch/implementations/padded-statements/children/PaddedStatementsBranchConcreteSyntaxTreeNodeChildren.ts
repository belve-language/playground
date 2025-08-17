import type {StatementsBranchConcreteSyntaxTreeNode} from "../../statements/StatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type PaddedStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | WhitespaceBranchConcreteSyntaxTreeNode,
	StatementsBranchConcreteSyntaxTreeNode,
	null | WhitespaceBranchConcreteSyntaxTreeNode,
];
