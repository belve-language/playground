import type {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
export abstract class AbstractSyntaxTreeNode<Data> {
	protected constructor(data: Data, spanIndexes: SpanIndexes) {
		this.data = data;
		this.spanIndexes = spanIndexes;
	}
	public readonly data: Data;
	public readonly spanIndexes: SpanIndexes;
}
