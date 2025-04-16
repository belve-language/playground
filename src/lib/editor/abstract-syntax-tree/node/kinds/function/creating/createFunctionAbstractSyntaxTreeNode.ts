import type {FunctionBodyAbstractSyntaxTreeNode} from "../../function-body/FunctionBodyAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {FunctionAbstractSyntaxTreeNode} from "../FunctionAbstractSyntaxTreeNode.ts";
export function createFunctionAbstractSyntaxTreeNode(
	header: FunctionHeaderAbstractSyntaxTreeNode | null,
	body: FunctionBodyAbstractSyntaxTreeNode,
): FunctionAbstractSyntaxTreeNode {
	const treeNode: FunctionAbstractSyntaxTreeNode = createAbstractSyntaxTreeNode(
		functionAbstractSyntaxTreeNodeKindName,
		{header, body} as const,
	);
	return treeNode;
}
