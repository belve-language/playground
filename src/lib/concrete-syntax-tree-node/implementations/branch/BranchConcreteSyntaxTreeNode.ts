import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export abstract class BranchConcreteSyntaxTreeNode<
	Children extends readonly (ConcreteSyntaxTreeNode | null)[],
> extends ConcreteSyntaxTreeNode {
	protected constructor(children: Children, spanIndexes: SpanIndexes) {
		super();
		this.children = children;
		this.spanIndexes = spanIndexes;
	}
	public readonly children: Children;
	public override *iterateCharacters(): Generator<string, void, void> {
		for (const child of this.children) {
			if (child !== null) {
				yield* child.iterateCharacters();
			}
		}
	}
	public readonly spanIndexes: SpanIndexes;
}
