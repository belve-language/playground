import type {VariableNameBranchConcreteSyntaxTreeNode} from "../../variable-name/VariableNameBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | WhitespaceBranchConcreteSyntaxTreeNode,
	VariableNameBranchConcreteSyntaxTreeNode,
	null | WhitespaceBranchConcreteSyntaxTreeNode,
];
