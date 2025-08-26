import type {FunctionsBranchConcreteSyntaxTreeNode} from "../../functions/FunctionsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	whitespace1: null | WhitespaceBranchConcreteSyntaxTreeNode,
	functions: FunctionsBranchConcreteSyntaxTreeNode,
	whitespace2: null | WhitespaceBranchConcreteSyntaxTreeNode,
];
