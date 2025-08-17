import type {FunctionsBranchConcreteSyntaxTreeNode} from "../../functions/FunctionsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedFunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	FunctionsBranchConcreteSyntaxTreeNode,
	WhitespaceBranchConcreteSyntaxTreeNode | null,
];
