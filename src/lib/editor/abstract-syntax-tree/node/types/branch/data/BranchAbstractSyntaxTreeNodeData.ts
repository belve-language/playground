import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
export type BranchAbstractSyntaxTreeNodeData<ChildrenToUse> = Readonly<{
	children: ChildrenToUse;
	spanIndexes: SpanIndexes;
}>;
