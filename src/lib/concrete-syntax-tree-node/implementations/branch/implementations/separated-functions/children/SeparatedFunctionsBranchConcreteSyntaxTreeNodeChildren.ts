import type {FunctionsBranchConcreteSyntaxTreeNode} from "../../functions/FunctionsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	functions: FunctionsBranchConcreteSyntaxTreeNode,
	whitespace: null | WhitespaceBranchConcreteSyntaxTreeNode,
];
