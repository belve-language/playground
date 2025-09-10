import type {Character} from "../../../character/Character.ts";
import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Atom} from "../../Atom.ts";
export class TerminalAtom<CharacterToUse extends Character> extends Atom {
	public constructor(character: CharacterToUse, spanIndexes: SpanIndexes) {
		super(spanIndexes);
		this.character = character;
	}
	public readonly character: CharacterToUse;
}
