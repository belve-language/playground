import type {Character} from "../character/Character.ts";
export abstract class ConcreteSyntaxTreeNode {
	protected constructor() {}
	public abstract iterateCharacters(): Generator<Character, void, void>;
}
