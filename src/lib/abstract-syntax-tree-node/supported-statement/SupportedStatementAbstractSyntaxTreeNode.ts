import type {BlockAbstractSyntaxTreeNode} from "../implementations/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../implementations/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
export type SupportedStatementAbstractSyntaxTreeNode =
	| BlockAbstractSyntaxTreeNode
	| FunctionCallAbstractSyntaxTreeNode;
