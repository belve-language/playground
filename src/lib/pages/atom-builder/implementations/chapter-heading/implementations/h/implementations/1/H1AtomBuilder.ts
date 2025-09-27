import {HChapterHeadingAtomBuilder} from "../../HChapterHeadingAtomBuilder.ts";
import ComponentOfH1Atom from "./component/ComponentOfH1Atom.svelte";
export class H1AtomBuilder extends HChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfH1Atom, 1, title);
	}
}
