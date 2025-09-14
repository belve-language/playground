import type {Index} from "../index/Index.ts";
export class SpanIndexes {
	public constructor(from: Index, until: Index) {
		this.from = from;
		this.until = until;
	}
	public readonly from: Index;
	public readonly until: Index;
}
