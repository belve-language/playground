import {TableOfSourcesHChapterHeadingAtomBuilder} from "../../TableOfSourcesHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfSourcesH1Atom from "./component/ComponentOfTableOfSourcesH1Atom.svelte";
export class TableOfSourcesH1AtomBuilder extends TableOfSourcesHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfSourcesH1Atom, 1, title);
	}
}
