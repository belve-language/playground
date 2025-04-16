import type {SupportedConcreteSyntaxTreeNode} from "../../../../concrete-syntax-tree/node/SupportedConcreteSyntaxTreeNode.ts";
export type Level = Readonly<{
	number: number;
	nodes: readonly [
		SupportedConcreteSyntaxTreeNode,
		...SupportedConcreteSyntaxTreeNode[],
	];
}>;
