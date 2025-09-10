import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {BlockStatementAbstractSyntaxTreeNode} from "../../statement/implementations/block/BlockAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeChildren<
	FunctionHeaderAbstractSyntaxTreeNodeToUse extends
		FunctionHeaderAbstractSyntaxTreeNode | null,
> = {
	readonly body: BlockStatementAbstractSyntaxTreeNode;
	readonly header: FunctionHeaderAbstractSyntaxTreeNodeToUse;
};
