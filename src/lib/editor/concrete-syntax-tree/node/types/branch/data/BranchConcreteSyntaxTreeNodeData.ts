import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
export type BranchConcreteSyntaxTreeNodeData<
	ChildrenToUse extends readonly unknown[],
> = Readonly<{children: ChildrenToUse; spanIndexes: SpanIndexes}>;
