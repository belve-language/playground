import type {BlockAbstractSyntaxTreeNode} from "../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../function-call/FunctionCallAbstractSyntaxTreeNode.ts";
export type StatementAbstractSyntaxTreeNode =
	| BlockAbstractSyntaxTreeNode
	| FunctionCallAbstractSyntaxTreeNode;
