import {HChapterHeadingAtomBuilder} from "../../HChapterHeadingAtomBuilder.ts";
import ComponentOfH4Atom from "./component/ComponentOfH4Atom.svelte";
export class H4AtomBuilder extends HChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfH4Atom, 4, title);
	}
}
