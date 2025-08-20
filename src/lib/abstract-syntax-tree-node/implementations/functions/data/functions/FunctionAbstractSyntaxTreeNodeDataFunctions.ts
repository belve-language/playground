import type {FunctionAbstractSyntaxTreeNode} from "../../../function/FunctionAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeDataFunctions = {
	readonly [
		functionId: FunctionAbstractSyntaxTreeNode["data"]["id"]
	]: FunctionAbstractSyntaxTreeNode;
};
