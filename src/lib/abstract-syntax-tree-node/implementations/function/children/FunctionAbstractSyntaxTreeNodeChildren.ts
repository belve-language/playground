import type {BlockAbstractSyntaxTreeNode} from "../../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeChildren = {
	readonly header: FunctionHeaderAbstractSyntaxTreeNode | null;
	readonly body: BlockAbstractSyntaxTreeNode;
};
