import type {PaddedOperatedStatementsBranchConcreteSyntaxTreeNode} from "../../padded-operated-statements/PaddedOperatedStatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type BlockContentBranchConcreteSyntaxTreeNodeChildren = readonly [
	| PaddedOperatedStatementsBranchConcreteSyntaxTreeNode
	| WhitespaceBranchConcreteSyntaxTreeNode,
];
