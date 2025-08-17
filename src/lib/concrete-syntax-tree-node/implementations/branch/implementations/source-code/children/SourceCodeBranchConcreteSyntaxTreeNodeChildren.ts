import type {PaddedFunctionsBranchConcreteSyntaxTreeNode} from "../../padded-functions/PaddedFunctionsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SourceCodeBranchConcreteSyntaxTreeNodeChildren = readonly [
	| PaddedFunctionsBranchConcreteSyntaxTreeNode
	| WhitespaceBranchConcreteSyntaxTreeNode,
];
