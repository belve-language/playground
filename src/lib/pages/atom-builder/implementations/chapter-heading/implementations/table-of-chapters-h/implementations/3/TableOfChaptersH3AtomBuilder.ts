import {TableOfChaptersHChapterHeadingAtomBuilder} from "../../TableOfChaptersHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfChaptersH3Atom from "./component/ComponentOfTableOfChaptersH3Atom.svelte";
export class TableOfChaptersH3AtomBuilder extends TableOfChaptersHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfChaptersH3Atom, 3, title);
	}
}
