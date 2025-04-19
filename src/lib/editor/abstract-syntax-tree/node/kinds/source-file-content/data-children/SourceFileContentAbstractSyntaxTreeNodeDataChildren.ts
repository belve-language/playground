import type {FunctionAbstractSyntaxTreeNode} from "../../function/FunctionAbstractSyntaxTreeNode.ts";
export type SourceFileContentAbstractSyntaxTreeNodeDataChildren = Readonly<{
	functions: readonly [
		FunctionAbstractSyntaxTreeNode,
		...FunctionAbstractSyntaxTreeNode[],
	];
}>;
