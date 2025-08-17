import type {Character} from "../../../character/Character.ts";
import type {Index} from "../../../index/Index.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export abstract class LeafConcreteSyntaxTreeNode<
	CharacterToUse extends Character,
> extends ConcreteSyntaxTreeNode {
	protected constructor(character: CharacterToUse, index: Index) {
		super();
		this.character = character;
		this.index = index;
	}
	public readonly character: CharacterToUse;
	public readonly index: Index;
	public override *iterateCharacters(): Generator<CharacterToUse, void, void> {
		yield this.character;
	}
}
