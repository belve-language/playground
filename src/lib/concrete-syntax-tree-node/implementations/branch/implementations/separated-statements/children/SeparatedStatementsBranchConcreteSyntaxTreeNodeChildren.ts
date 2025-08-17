import type {OperatorLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/operator/OperatorLeafConcreteSyntaxTreeNode.ts";
import type {StatementsBranchConcreteSyntaxTreeNode} from "../../statements/StatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedStatementsBranchConcreteSyntaxTreeNodeChildren = readonly [
	StatementsBranchConcreteSyntaxTreeNode,
	null | WhitespaceBranchConcreteSyntaxTreeNode,
	OperatorLeafConcreteSyntaxTreeNode,
	null | WhitespaceBranchConcreteSyntaxTreeNode,
];
