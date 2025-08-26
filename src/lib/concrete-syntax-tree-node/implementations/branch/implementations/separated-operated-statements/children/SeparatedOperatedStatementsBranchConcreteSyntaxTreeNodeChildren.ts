import type {OperatedStatementsBranchConcreteSyntaxTreeNode} from "../../operated-statements/OperatedStatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedOperatedStatementsBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		operatedStatements: OperatedStatementsBranchConcreteSyntaxTreeNode,
		whitespace: null | WhitespaceBranchConcreteSyntaxTreeNode,
	];
