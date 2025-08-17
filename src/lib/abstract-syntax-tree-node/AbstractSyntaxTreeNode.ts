import type {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
export abstract class AbstractSyntaxTreeNode {
	protected constructor(spanIndexes: SpanIndexes) {
		this.spanIndexes = spanIndexes;
	}
	public readonly spanIndexes: SpanIndexes;
}
