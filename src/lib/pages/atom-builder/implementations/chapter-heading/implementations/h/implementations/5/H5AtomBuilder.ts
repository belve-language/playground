import {HChapterHeadingAtomBuilder} from "../../HChapterHeadingAtomBuilder.ts";
import ComponentOfH5Atom from "./component/ComponentOfH5Atom.svelte";
export class H5AtomBuilder extends HChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfH5Atom, 5, true, true, title);
	}
}
