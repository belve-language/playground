import type {NonMainFunctions} from "../../../../non-main-functions/NonMainFunctions.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
export type FunctionsAbstractSyntaxTreeNodeChildren<
	MainFunctionAbstractSyntaxTreeNodeToUse extends
		MainFunctionAbstractSyntaxTreeNode | null,
> = {
	readonly mainFunction: MainFunctionAbstractSyntaxTreeNodeToUse;
	readonly nonMainFunctions: NonMainFunctions;
};
