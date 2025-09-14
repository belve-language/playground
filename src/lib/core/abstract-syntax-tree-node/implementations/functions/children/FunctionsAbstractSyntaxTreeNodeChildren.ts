import type {NonMainFunctions} from "../../../../non-main-functions/NonMainFunctions.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
export type FunctionsAbstractSyntaxTreeNodeChildren = {
	readonly mainFunction: MainFunctionAbstractSyntaxTreeNode | null;
	readonly nonMainFunctions: NonMainFunctions;
};
