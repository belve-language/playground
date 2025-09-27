import {TableOfChaptersHChapterHeadingAtomBuilder} from "../../TableOfChaptersHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfChaptersH4Atom from "./component/ComponentOfTableOfChaptersH4Atom.svelte";
export class TableOfChaptersH4AtomBuilder extends TableOfChaptersHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfChaptersH4Atom, 4, title);
	}
}
