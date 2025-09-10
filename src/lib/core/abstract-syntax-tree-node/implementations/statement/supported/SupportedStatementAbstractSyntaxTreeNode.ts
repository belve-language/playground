import type {BlockStatementAbstractSyntaxTreeNode} from "../implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
import type {FunctionCallStatementAbstractSyntaxTreeNode} from "../implementations/function-call/FunctionCallStatementAbstractSyntaxTreeNode.ts";
export type SupportedStatementAbstractSyntaxTreeNode =
	| BlockStatementAbstractSyntaxTreeNode
	| FunctionCallStatementAbstractSyntaxTreeNode;
