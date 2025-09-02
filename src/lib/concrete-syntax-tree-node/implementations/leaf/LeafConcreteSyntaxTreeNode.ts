import type {Character} from "../../../character/Character.ts";
import type {Index} from "../../../index/Index.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export class LeafConcreteSyntaxTreeNode<
	CharacterToUse extends Character,
> extends ConcreteSyntaxTreeNode {
	public constructor(character: CharacterToUse, index: Index) {
		super();
		this.character = character;
		this.index = index;
	}
	public readonly character: CharacterToUse;
	public override computeSpanIndexes(): SpanIndexes {
		return {ending: this.index, starting: this.index};
	}
	public readonly index: Index;
	public override *iterateCharacters(): Generator<CharacterToUse, void, void> {
		yield this.character;
	}
}
