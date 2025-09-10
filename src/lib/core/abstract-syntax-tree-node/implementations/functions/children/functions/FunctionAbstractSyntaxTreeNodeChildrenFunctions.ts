import type {NonMainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeChildrenFunctions = {
	readonly [functionId: string]: NonMainFunctionAbstractSyntaxTreeNode;
};
