import type {ConcreteSyntaxTreeNode} from "./src/lib/concrete-syntax-tree-node/ConcreteSyntaxTreeNode.ts";
export type FinalizingParsingResult<
	NodeToUse extends ConcreteSyntaxTreeNode | null,
> = {node: NodeToUse};
