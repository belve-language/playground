import type {SpanIndexes} from "../../../../span-indexes/SpanIndexes.ts";
import type {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export type BranchConcreteSyntaxTreeNodeData<
	DataChildrenToUse extends readonly (ConcreteSyntaxTreeNode<
		string,
		string,
		unknown
	> | null)[],
> = Readonly<{children: ChildrenToUse; spanIndexes: SpanIndexes}>;
