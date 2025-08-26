import type {BlockStatementBranchConcreteSyntaxTreeNode} from "../../block-statement/BlockStatementBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementBranchConcreteSyntaxTreeNode} from "../../function-call-statement/FunctionCallStatementBranchConcreteSyntaxTreeNode.ts";
export type SupportedStatementBranchConcreteSyntaxTreeNode =
	| BlockStatementBranchConcreteSyntaxTreeNode
	| FunctionCallStatementBranchConcreteSyntaxTreeNode;
