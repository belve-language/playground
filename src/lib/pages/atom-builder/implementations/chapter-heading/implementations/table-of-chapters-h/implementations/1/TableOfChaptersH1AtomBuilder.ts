import {TableOfChaptersHChapterHeadingAtomBuilder} from "../../TableOfChaptersHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfChaptersH1Atom from "./component/ComponentOfTableOfChaptersH1Atom.svelte";
export class TableOfChaptersH1AtomBuilder extends TableOfChaptersHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfChaptersH1Atom, 1, title);
	}
}
