import type {BlockAbstractSyntaxTreeNode} from "../../block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionBodyAbstractSyntaxTreeNode} from "../FunctionBodyAbstractSyntaxTreeNode.ts";
export function createFunctionBodyAbstractSyntaxTreeNode(
	block: BlockAbstractSyntaxTreeNode,
): FunctionBodyAbstractSyntaxTreeNode {
	const treeNode: FunctionBodyAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(functionBodyAbstractSyntaxTreeNodeKindName, {
			block,
		} as const);
	return treeNode;
}
