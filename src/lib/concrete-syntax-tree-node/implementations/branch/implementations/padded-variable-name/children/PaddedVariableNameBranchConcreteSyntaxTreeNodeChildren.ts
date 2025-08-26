import type {VariableNameBranchConcreteSyntaxTreeNode} from "../../variable-name/VariableNameBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type PaddedVariableNameBranchConcreteSyntaxTreeNodeChildren = readonly [
	whitespace1: null | WhitespaceBranchConcreteSyntaxTreeNode,
	variableName: VariableNameBranchConcreteSyntaxTreeNode,
	whitespace2: null | WhitespaceBranchConcreteSyntaxTreeNode,
];
