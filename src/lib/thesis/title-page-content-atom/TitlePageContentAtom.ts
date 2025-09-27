import ComponentOfTitlePageContentAtom from "./component/ComponentOfTitlePageContentAtom.svelte";
import {ChapterHeadingAtomBuilder} from "../../pages/atom-builder/implementations/chapter-heading/ChapterHeadingAtomBuilder.ts";
export class TitlePageContentAtomBuilder extends ChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTitlePageContentAtom, 1, false, title);
	}
}
