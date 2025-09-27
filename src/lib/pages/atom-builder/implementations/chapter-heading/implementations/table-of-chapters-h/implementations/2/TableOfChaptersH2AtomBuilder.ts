import {TableOfChaptersHChapterHeadingAtomBuilder} from "../../TableOfChaptersHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfChaptersH2Atom from "./component/ComponentOfTableOfChaptersH2Atom.svelte";
export class TableOfChaptersH2AtomBuilder extends TableOfChaptersHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfChaptersH2Atom, 2, title);
	}
}
