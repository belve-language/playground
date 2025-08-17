import type {FunctionBranchConcreteSyntaxTreeNode} from "../../function/FunctionBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionsBranchConcreteSyntaxTreeNode} from "../../separated-functions/SeparatedFunctionsBranchConcreteSyntaxTreeNode.ts";
export type FunctionsBranchConcreteSyntaxTreeNodeChildren = readonly [
	null | SeparatedFunctionsBranchConcreteSyntaxTreeNode,
	FunctionBranchConcreteSyntaxTreeNode,
];
