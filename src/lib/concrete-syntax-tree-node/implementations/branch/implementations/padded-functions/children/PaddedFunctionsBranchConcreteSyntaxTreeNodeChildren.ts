import type {FunctionsBranchConcreteSyntaxTreeNode} from "../../functions/FunctionsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type PaddedFunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | WhitespaceBranchConcreteSyntaxTreeNode,
	FunctionsBranchConcreteSyntaxTreeNode,
	null | WhitespaceBranchConcreteSyntaxTreeNode,
];
