import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
export type LeafAbstractSyntaxTreeNodeData<ValueToUse> = Readonly<{
	spanIndexes: SpanIndexes;
	value: ValueToUse;
}>;
