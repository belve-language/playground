import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class BranchConcreteSyntaxTreeNode<
	ChildrenToUse extends readonly [
		ConcreteSyntaxTreeNode | null,
		...(readonly (ConcreteSyntaxTreeNode | null)[]),
	],
> extends ConcreteSyntaxTreeNode {
	public constructor(children: ChildrenToUse) {
		super();
		this.children = children;
	}
	public readonly children: ChildrenToUse;
	public computeSpanIndexes(): null | SpanIndexes {
		const childrenSpanIndexes: readonly SpanIndexes[] = this.children.flatMap(
			(child) => {
				if (child === null) {
					return [];
				} else {
					const spanIndexes = child.computeSpanIndexes();
					if (spanIndexes === null) {
						return [];
					} else {
						return [spanIndexes];
					}
				}
			},
		);
		const [firstChildSpanIndexes, ...restChildSpanIndexeses] =
			childrenSpanIndexes;
		if (firstChildSpanIndexes === undefined) {
			return null;
		} else {
			const startingIndex = firstChildSpanIndexes.starting;
			const lastChildSpanIndexes =
				restChildSpanIndexeses[restChildSpanIndexeses.length - 1];
			if (lastChildSpanIndexes === undefined) {
				const endingIndex = firstChildSpanIndexes.ending;
				return {ending: endingIndex, starting: startingIndex};
			} else {
				const endingIndex = lastChildSpanIndexes.ending;
				return {ending: endingIndex, starting: startingIndex};
			}
		}
	}
	public override *iterateCharacters(): Generator<string, void, void> {
		for (const child of this.children) {
			if (child !== null) {
				const childCharacters = child.iterateCharacters();
				yield* childCharacters;
			}
		}
	}
}
