import {HChapterHeadingAtomBuilder} from "../../HChapterHeadingAtomBuilder.ts";
import ComponentOfH3Atom from "./component/ComponentOfH3Atom.svelte";
export class H3AtomBuilder extends HChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfH3Atom, 3, true, true, title);
	}
}
