import ComponentOfTitlePageContentAtom from "./component/ComponentOfTitlePageContentAtom.svelte";
import {HChapterHeadingAtomBuilder} from "../../pages/atom-builder/implementations/chapter-heading/implementations/h/HChapterHeadingAtomBuilder.ts";
export class TitlePageContentAtomBuilder extends HChapterHeadingAtomBuilder {
	public constructor(title: string) {
		super(ComponentOfTitlePageContentAtom, 1, false, false, title);
	}
}
