import type {FunctionHeaderBranchConcreteSyntaxTreeNode} from "../../function-header/FunctionHeaderBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type SeparatedFunctionHeaderBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		FunctionHeaderBranchConcreteSyntaxTreeNode,
		null | WhitespaceBranchConcreteSyntaxTreeNode,
	];
