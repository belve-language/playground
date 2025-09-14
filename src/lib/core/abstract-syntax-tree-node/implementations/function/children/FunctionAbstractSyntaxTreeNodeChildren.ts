import type {BlockStatementAbstractSyntaxTreeNode} from "../../statement/implementations/block/BlockStatementAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeChildren = {
	readonly body: BlockStatementAbstractSyntaxTreeNode;
	readonly header: SupportedFunctionHeaderAbstractSyntaxTreeNodeToUse;
};
