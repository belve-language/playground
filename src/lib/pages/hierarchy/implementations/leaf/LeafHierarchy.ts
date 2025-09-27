import type {ResultOfInsertingNonChapterHeadingAtomBuilder} from "./result-of-inserting-non-chapter-heading-atom-builder/ResultOfInsertingNonChapterHeadingAtomBuilder.ts";
import type {Atom} from "../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../atom/implementations/h/implementations/chapter-heading/ChapterHeadingAtom.ts";
import type {ChapterHeadingAtomBuilder} from "../../../atom-builder/implementations/chapter-heading/ChapterHeadingAtomBuilder.ts";
import type {TableOfChaptersHChapterHeadingAtomBuilder} from "../../../atom-builder/implementations/chapter-heading/implementations/table-of-chapters-h/TableOfChaptersHChapterHeadingAtomBuilder.ts";
import type {TableOfSourcesHChapterHeadingAtomBuilder} from "../../../atom-builder/implementations/chapter-heading/implementations/table-of-sources-h/TableOfSourcesHChapterHeadingAtomBuilder.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../atom-builder/implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
import type {ChapterNumber} from "../../../chapter-number/ChapterNumber.ts";
import type {Source} from "../../../source/Source.ts";
import {Hierarchy} from "../../Hierarchy.ts";
import type {MoveDatum} from "../../move-datum/MoveDatum.ts";
export abstract class LeafHierarchy<SubAtom extends Atom> extends Hierarchy<
	readonly [ChapterHeadingAtom, ...(readonly SubAtom[])]
> {
	protected constructor(
		shouldBeConsideredInChapterNumbers: boolean,
		subAtoms: readonly [ChapterHeadingAtom, ...(readonly SubAtom[])],
	) {
		super(subAtoms);
		this.shouldBeConsideredInChapterNumbers =
			shouldBeConsideredInChapterNumbers;
	}
	public abstract extractChapterHeadingAtoms(): readonly ChapterHeadingAtom[];
	public abstract extractSources(): readonly Source[];
	public abstract insertChapterHeadingAtomBuilderAtEnd(
		atomBuilder: ChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): {
		readonly insertedAtom: ChapterHeadingAtom;
		readonly newHierarchy: LeafHierarchy<SubAtom>;
	};
	public abstract insertNonChapterHeadingAtomBuilderAtEnd(
		atomBuilder: NonChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
		existingSources: readonly Source[],
	): ResultOfInsertingNonChapterHeadingAtomBuilder<SubAtom>;
	public abstract insertTableOfChaptersHAtomBuilderAtEnd(
		atomBuilder: TableOfChaptersHChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): {
		readonly insertedAtom: ChapterHeadingAtom;
		readonly newHierarchy: LeafHierarchy<SubAtom>;
	};
	public abstract insertTableOfSourcesHAtomBuilderAtEnd(
		atomBuilder: TableOfSourcesHChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): {
		readonly insertedAtom: ChapterHeadingAtom;
		readonly newHierarchy: LeafHierarchy<SubAtom>;
	};
	public abstract notifyTableOfChaptersOfInsertedChapterHeadingAtomWithoutPropagation(
		insertedAtom: ChapterHeadingAtom,
	): LeafHierarchy<SubAtom>;
	public abstract notifyTableOfChaptersOfMovedChapterHeadingAtomWithoutPropagation(
		moveDatum: MoveDatum,
	): LeafHierarchy<SubAtom>;
	public abstract notifyTableOfSourcesOfNewSourcesWithoutPropagation(
		newSources: readonly Source[],
	): LeafHierarchy<SubAtom>;
	public readonly shouldBeConsideredInChapterNumbers: boolean;
}
