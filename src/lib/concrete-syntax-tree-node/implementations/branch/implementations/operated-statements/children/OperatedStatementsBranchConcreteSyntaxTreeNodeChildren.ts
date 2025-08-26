import type {OperatorLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/operator/OperatorLeafConcreteSyntaxTreeNode.ts";
import type {StatementsBranchConcreteSyntaxTreeNode} from "../../statements/StatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type OperatedStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	statements: StatementsBranchConcreteSyntaxTreeNode,
	whitespace: null | WhitespaceBranchConcreteSyntaxTreeNode,
	operator: OperatorLeafConcreteSyntaxTreeNode,
];
