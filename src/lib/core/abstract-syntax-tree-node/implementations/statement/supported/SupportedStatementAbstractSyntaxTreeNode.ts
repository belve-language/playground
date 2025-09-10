import type {BlockStatementAbstractSyntaxTreeNode} from "../implementations/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallStatementAbstractSyntaxTreeNode} from "../implementations/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
export type SupportedStatementAbstractSyntaxTreeNode =
	| BlockStatementAbstractSyntaxTreeNode
	| FunctionCallStatementAbstractSyntaxTreeNode;
