import type {NonMainFunctions} from "../../../../non-main-functions/NonMainFunctions.ts";
import type {MainFunctionAbstractSyntaxTreeNode} from "../../function/implementations/main/MainFunctionAbstractSyntaxTreeNode.ts";
export type FunctionsAbstractSyntaxTreeNodeChildren<
	MainFunctionToUse extends MainFunctionAbstractSyntaxTreeNode | null,
> = {
	readonly mainFunction: MainFunctionToUse;
	readonly nonMainFunctions: NonMainFunctions;
};
