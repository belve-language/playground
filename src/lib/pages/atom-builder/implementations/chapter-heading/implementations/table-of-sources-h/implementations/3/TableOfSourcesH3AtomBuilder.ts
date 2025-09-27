import {TableOfSourcesHChapterHeadingAtomBuilder} from "../../TableOfSourcesHChapterHeadingAtomBuilder.ts";
import ComponentOfTableOfSourcesH3Atom from "./component/ComponentOfTableOfSourcesH3Atom.svelte";
export class TableOfSourcesH3AtomBuilder extends TableOfSourcesHChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTableOfSourcesH3Atom, 3, title);
	}
}
