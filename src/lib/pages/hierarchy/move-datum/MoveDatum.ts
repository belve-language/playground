import type {ChapterHeadingAtom} from "../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
export class MoveDatum {
	public constructor(
		oldChapterHeadingAtom: ChapterHeadingAtom,
		newChapterHeadingAtom: ChapterHeadingAtom,
	) {
		this.oldChapterHeadingAtom = oldChapterHeadingAtom;
		this.newChapterHeadingAtom = newChapterHeadingAtom;
	}
	public readonly newChapterHeadingAtom: ChapterHeadingAtom;
	public readonly oldChapterHeadingAtom: ChapterHeadingAtom;
}
