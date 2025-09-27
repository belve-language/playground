import {TableOfSourcesHChapterHeadingAtomBuilder} from "../../TableOfSourcesHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfSourcesH2Atom from "./component/ComponentOfTableOfSourcesH2Atom.svelte";
export class TableOfSourcesH2AtomBuilder extends TableOfSourcesHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfSourcesH2Atom, 2, title);
	}
}
