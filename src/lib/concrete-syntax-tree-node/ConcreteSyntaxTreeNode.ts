import type {Character} from "../character/Character.ts";
import type {Index} from "../index/Index.ts";
export abstract class ConcreteSyntaxTreeNode<TypeName extends string> {
	protected constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public abstract computeSpanIndexesEndingIndex(): Index;
	public abstract computeSpanIndexesStartingIndex(): Index;
	public abstract iterateCharacters(): Generator<Character, void, void>;
	public readonly typeName: TypeName;
}
