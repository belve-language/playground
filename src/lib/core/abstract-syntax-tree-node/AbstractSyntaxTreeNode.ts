import type {SpanIndexes} from "../span-indexes/SpanIndexes.ts";
export abstract class AbstractSyntaxTreeNode<Children> {
	protected constructor(children: Children, spanIndexes: SpanIndexes) {
		this.children = children;
		this.spanIndexes = spanIndexes;
	}
	public readonly children: Children;
	public readonly spanIndexes: SpanIndexes;
}
