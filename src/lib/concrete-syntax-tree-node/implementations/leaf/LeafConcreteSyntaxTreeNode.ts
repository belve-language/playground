import type {Character} from "../../../character/Character.ts";
import type {Index} from "../../../index/Index.ts";
import {ConcreteSyntaxTreeNode} from "../../ConcreteSyntaxTreeNode.ts";
export abstract class LeafConcreteSyntaxTreeNode<
	CharacterToUse extends Character,
	TypeName extends string,
> extends ConcreteSyntaxTreeNode<TypeName> {
	protected constructor(
		character: CharacterToUse,
		index: Index,
		typeName: TypeName,
	) {
		super(typeName);
		this.character = character;
		this.index = index;
	}
	public readonly character: CharacterToUse;
	public override computeSpanIndexesEndingIndex(): Index {
		return this.index;
	}
	public override computeSpanIndexesStartingIndex(): Index {
		return this.index;
	}
	public readonly index: Index;
	public override *iterateCharacters(): Generator<CharacterToUse, void, void> {
		yield this.character;
	}
}
