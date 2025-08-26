import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "./functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../../function/FunctionAbstractSyntaxTreeNode.ts";
export type FunctionsAbstractSyntaxTreeNodeChildren = {
	readonly functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions;
	readonly mainFunction: FunctionAbstractSyntaxTreeNode | null;
};
