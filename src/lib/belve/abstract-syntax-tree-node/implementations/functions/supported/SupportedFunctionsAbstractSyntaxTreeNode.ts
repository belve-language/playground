import type {WithMainFunctionFunctionsAbstractSyntaxTreeNode} from "../implementations/with-main-function/WithMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
import type {WithoutMainFunctionFunctionsAbstractSyntaxTreeNode} from "../implementations/without-main-function/WithoutMainFunctionFunctionsAbstractSyntaxTreeNode.ts";
export type SupportedFunctionsAbstractSyntaxTreeNode =
	| WithMainFunctionFunctionsAbstractSyntaxTreeNode
	| WithoutMainFunctionFunctionsAbstractSyntaxTreeNode;
