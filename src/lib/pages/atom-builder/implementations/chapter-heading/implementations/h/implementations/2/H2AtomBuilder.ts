import {HChapterHeadingAtomBuilder} from "../../HChapterHeadingAtomBuilder.ts";
import ComponentOfH2Atom from "./component/ComponentOfH2Atom.svelte";
export class H2AtomBuilder extends HChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfH2Atom, 2, true, true, title);
	}
}
