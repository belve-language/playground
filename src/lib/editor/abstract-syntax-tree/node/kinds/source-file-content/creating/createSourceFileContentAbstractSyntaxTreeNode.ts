import type {FunctionAbstractSyntaxTreeNode} from "../../function/FunctionAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNode} from "../SourceFileContentAbstractSyntaxTreeNode.ts";
export function createSourceFileContentAbstractSyntaxTreeNode(
	functions: readonly [
		FunctionAbstractSyntaxTreeNode,
		...FunctionAbstractSyntaxTreeNode[],
	],
): SourceFileContentAbstractSyntaxTreeNode {
	const treeNode: SourceFileContentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			sourceFileContentAbstractSyntaxTreeNodeTypeName,
			{functions} as const,
		);
	return treeNode;
}
