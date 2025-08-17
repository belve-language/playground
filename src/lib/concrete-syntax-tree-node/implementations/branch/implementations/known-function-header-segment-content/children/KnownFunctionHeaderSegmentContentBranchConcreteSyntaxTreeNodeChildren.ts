import type {PaddedVariableNameBranchConcreteSyntaxTreeNode} from "../../padded-variable-name/PaddedVariableNameBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type KnownFunctionHeaderSegmentContentBranchConcreteSyntaxTreeNodeChildren =
	readonly [
		| PaddedVariableNameBranchConcreteSyntaxTreeNode
		| WhitespaceBranchConcreteSyntaxTreeNode,
	];
