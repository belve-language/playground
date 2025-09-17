import type {MainFunctionAbstractSyntaxTreeNode} from "../implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
export type SupportedFunctionAbstractSyntaxTreeNode =
	| MainFunctionAbstractSyntaxTreeNode
	| NonMainFunctionAbstractSyntaxTreeNode;
