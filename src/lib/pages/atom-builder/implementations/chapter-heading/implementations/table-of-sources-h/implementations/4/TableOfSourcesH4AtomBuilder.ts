import {TableOfSourcesHChapterHeadingAtomBuilder} from "../../TableOfSourcesHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfSourcesH4Atom from "./component/ComponentOfTableOfSourcesH4Atom.svelte";
export class TableOfSourcesH4AtomBuilder extends TableOfSourcesHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfSourcesH4Atom, 4, title);
	}
}
