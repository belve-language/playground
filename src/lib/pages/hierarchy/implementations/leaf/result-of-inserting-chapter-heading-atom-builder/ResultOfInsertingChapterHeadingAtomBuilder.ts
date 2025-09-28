import type {Atom} from "../../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
import type {LeafHierarchy} from "../LeafHierarchy.ts";
export class ResultOfInsertingChapterHeadingAtomBuilder<SubAtom extends Atom> {
	public constructor(
		insertedAtom: ChapterHeadingAtom,
		newHierarchy: LeafHierarchy<SubAtom>,
	) {
		this.insertedAtom = insertedAtom;
		this.newHierarchy = newHierarchy;
	}
	public readonly insertedAtom: ChapterHeadingAtom;
	public readonly newHierarchy: LeafHierarchy<SubAtom>;
}
