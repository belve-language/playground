import type {Character} from "../character/Character.ts";
import type {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
export abstract class ConcreteSyntaxTreeNode {
	protected constructor() {}
	public abstract computeSpanIndexes(): null | SpanIndexes;
	public abstract iterateCharacters(): Iterable<Character, void, void>;
}
