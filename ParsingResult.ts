import type {ConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
export type ParsingResult<NodeToUse extends ConcreteSyntaxTreeNode | null> = {
	remainingCharacters: readonly string[];
	nextIndex: number;
	node: NodeToUse;
};
