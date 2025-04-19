import type {FunctionBodyAbstractSyntaxTreeNode} from "../../function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
export type FunctionAbstractSyntaxTreeNodeDataChildren = Readonly<{
	header: FunctionHeaderAbstractSyntaxTreeNode | null;
	body: FunctionBodyAbstractSyntaxTreeNode;
}>;
