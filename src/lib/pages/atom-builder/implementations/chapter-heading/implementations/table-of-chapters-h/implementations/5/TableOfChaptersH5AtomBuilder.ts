import {TableOfChaptersHChapterHeadingAtomBuilder} from "../../TableOfChaptersHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfChaptersH5Atom from "./component/ComponentOfTableOfChaptersH5Atom.svelte";
export class TableOfChaptersH5AtomBuilder extends TableOfChaptersHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfChaptersH5Atom, 5, title);
	}
}
