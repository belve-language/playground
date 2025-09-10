import type {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
export abstract class Atom {
	protected constructor(spanIndexes: SpanIndexes) {
		this.spanIndexes = spanIndexes;
	}
	public readonly spanIndexes: SpanIndexes;
}
