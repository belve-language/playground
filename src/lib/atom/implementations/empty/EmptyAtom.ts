import type {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {Atom} from "../../Atom.ts";
export class EmptyAtom extends Atom {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
}
