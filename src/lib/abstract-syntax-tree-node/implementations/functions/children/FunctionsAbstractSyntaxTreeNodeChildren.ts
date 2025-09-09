import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "./functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
export type FunctionsAbstractSyntaxTreeNodeChildren = {
	readonly functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions;
	readonly mainFunction: MainFunctionAbstractSyntaxTreeNode | null;
};
