import type {FunctionBodyBranchConcreteSyntaxTreeNode} from "../../function-body/FunctionBodyBranchConcreteSyntaxTreeNode.ts";
import type {SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode} from "../../separated-function-header/SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode.ts";
export type FunctionBranchConcreteSyntaxTreeNodeChildren = readonly [
	separatedFunctionHeaer: null | SeparatedFunctionHeaderBranchConcreteSyntaxTreeNode,
	functionBody: FunctionBodyBranchConcreteSyntaxTreeNode,
];
