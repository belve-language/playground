import type {ResultOfFixingOverflow} from "./result-of-fixing-overflow/ResultOfFixingOverflow.ts";
import type {ResultOfInsertingChapterHeadingAtomBuilder} from "./result-of-inserting-chapter-heading-atom-builder/ResultOfInsertingChapterHeadingAtomBuilder.ts";
import type {ResultOfInsertingNonChapterHeadingAtomBuilder} from "./result-of-inserting-non-chapter-heading-atom-builder/ResultOfInsertingNonChapterHeadingAtomBuilder.ts";
import type {Atom} from "../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
import type {HChapterHeadingAtomBuilder} from "../../../atom-builder/implementations/chapter-heading/implementations/h/HChapterHeadingAtomBuilder.ts";
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
		numberOfLastPage: number,
		shouldBeConsideredInChapterNumbers: boolean,
		subAtoms: readonly [ChapterHeadingAtom, ...(readonly SubAtom[])],
	) {
		super(numberOfLastPage, subAtoms);
		this.shouldBeConsideredInChapterNumbers =
			shouldBeConsideredInChapterNumbers;
	}
	public abstract extractChapterHeadingAtoms(): readonly ChapterHeadingAtom[];
	public abstract extractSources(): readonly Source[];
	public abstract fixOverflow(
		numberOfPage: number,
	): Generator<ResultOfFixingOverflow<SubAtom>, void, void>;
	public abstract insertChapterHeadingAtomBuilderAtEnd(
		atomBuilder: HChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): ResultOfInsertingChapterHeadingAtomBuilder<SubAtom>;
	public abstract insertNonChapterHeadingAtomBuilderAtEnd(
		atomBuilder: NonChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
		existingSources: readonly Source[],
	): ResultOfInsertingNonChapterHeadingAtomBuilder<SubAtom>;
	// TODO: Rename?
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
