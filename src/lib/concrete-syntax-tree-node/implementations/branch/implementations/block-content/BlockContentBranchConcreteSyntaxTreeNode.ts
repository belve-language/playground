import type {PaddedStatementsBranchConcreteSyntaxTreeNode} from "../padded-statements/PaddedStatementsBranchConcreteSyntaxTreeNode.ts";
import type {WhitespaceBranchConcreteSyntaxTreeNode} from "../whitespace/WhitespaceBranchConcreteSyntaxTreeNode.ts";
export type BlockContentBranchConcreteSyntaxTreeNode =
	| PaddedStatementsBranchConcreteSyntaxTreeNode
	| WhitespaceBranchConcreteSyntaxTreeNode;
