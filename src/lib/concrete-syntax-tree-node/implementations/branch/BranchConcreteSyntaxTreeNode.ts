import type {Index} from "../../../index/Index.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export abstract class BranchConcreteSyntaxTreeNode<
	Children extends readonly (ConcreteSyntaxTreeNode<string> | null)[],
	TypeName extends string,
> extends ConcreteSyntaxTreeNode<TypeName> {
	protected constructor(children: Children, typeName: TypeName) {
		super(typeName);
		this.children = children;
	}
	public readonly children: Children;
	public computeSpanIndexes(): SpanIndexes {
		const startingIndex = this.computeSpanIndexesStartingIndex();
		const endingIndex = this.computeSpanIndexesEndingIndex();
		return {ending: endingIndex, starting: startingIndex};
	}
	public override computeSpanIndexesEndingIndex(): Index {
		for (const child of this.children.toReversed()) {
			if (child !== null) {
				return child.computeSpanIndexesEndingIndex();
			}
		}
		throw new Error("No children found to compute span indexes ending index.");
	}
	public override computeSpanIndexesStartingIndex(): Index {
		for (const child of this.children) {
			if (child !== null) {
				return child.computeSpanIndexesStartingIndex();
			}
		}
		throw new Error(
			"No children found to compute span indexes starting index.",
		);
	}
	public override *iterateCharacters(): Generator<string, void, void> {
		for (const child of this.children) {
			if (child !== null) {
				yield* child.iterateCharacters();
			}
		}
	}
}
