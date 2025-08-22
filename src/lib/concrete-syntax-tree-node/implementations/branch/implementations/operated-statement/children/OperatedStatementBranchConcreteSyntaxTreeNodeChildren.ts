import type {OperatorLeafConcreteSyntaxTreeNode} from "../../../../leaf/implementations/operator/OperatorLeafConcreteSyntaxTreeNode.ts";
import type {SupportedStatementBranchConcreteSyntaxTreeNode} from "../../statement/supported/SupportedStatementBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type OperatedStatementBranchConcreteSyntaxTreeNodeChildren = readonly [
	statement: SupportedStatementBranchConcreteSyntaxTreeNode,
	whitespace: null | WhitespaceBranchConcreteSyntaxTreeNode,
	operator: OperatorLeafConcreteSyntaxTreeNode,
];
