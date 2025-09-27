import {TableOfSourcesHChapterHeadingAtomBuilder} from "../../TableOfSourcesHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfSourcesH5Atom from "./component/ComponentOfTableOfSourcesH5Atom.svelte";
export class TableOfSourcesH5AtomBuilder extends TableOfSourcesHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfSourcesH5Atom, 5, title);
	}
}
