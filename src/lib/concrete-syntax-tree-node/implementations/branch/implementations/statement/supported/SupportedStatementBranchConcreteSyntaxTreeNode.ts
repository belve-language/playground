import type {BlockStatementBranchConcreteSyntaxTreeNode} from "../implementations/block/BlockStatementBranchConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementBranchConcreteSyntaxTreeNode} from "../implementations/function-call/FunctionCallStatementBranchConcreteSyntaxTreeNode.ts";
export type SupportedStatementBranchConcreteSyntaxTreeNode =
	| BlockStatementBranchConcreteSyntaxTreeNode
	| FunctionCallStatementBranchConcreteSyntaxTreeNode;
