import type {FunctionAbstractSyntaxTreeNode} from "../../function/FunctionAbstractSyntaxTreeNode.ts";
import type {SourceFileContentAbstractSyntaxTreeNode} from "../SourceFileContentAbstractSyntaxTreeNode.ts";
export function createSourceFileContentAbstractSyntaxTreeNode(
	children,
): SourceFileContentAbstractSyntaxTreeNode {
	const treeNode: SourceFileContentAbstractSyntaxTreeNode =
		createAbstractSyntaxTreeNode(
			sourceFileContentAbstractSyntaxTreeNodeKindName,
			{functions} as const,
		);
	return treeNode;
}
