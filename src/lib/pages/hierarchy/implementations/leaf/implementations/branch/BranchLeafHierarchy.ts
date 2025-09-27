import type {Atom} from "../../../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../../../atom/implementations/h/implementations/chapter-heading/ChapterHeadingAtom.ts";
import type {NonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
import type {ChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/ChapterHeadingAtomBuilder.ts";
import type {TableOfChaptersHChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/table-of-chapters-h/TableOfChaptersHChapterHeadingAtomBuilder.ts";
import type {TableOfSourcesHChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/table-of-sources-h/TableOfSourcesHChapterHeadingAtomBuilder.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
import type {ChapterNumber} from "../../../../../chapter-number/ChapterNumber.ts";
import type {Source} from "../../../../../source/Source.ts";
import type {MoveData} from "../../../../move-data/MoveData.ts";
import type {MoveDatum} from "../../../../move-datum/MoveDatum.ts";
import {LeafHierarchy} from "../../LeafHierarchy.ts";
import {ResultOfInsertingNonChapterHeadingAtomBuilder} from "../../result-of-inserting-non-chapter-heading-atom-builder/ResultOfInsertingNonChapterHeadingAtomBuilder.ts";
import {TableOfChaptersLeafHierarchy} from "../table-of-chapters/TableOfChaptersLeafHierarchy.ts";
import {TableOfSourcesLeafHierarchy} from "../table-of-sources/TableOfSourcesLeafHierarchy.ts";
export class BranchLeafHierarchy extends LeafHierarchy<NonChapterHeadingAtom> {
	public static create(
		atom: ChapterHeadingAtom,
		shouldBeConsideredInChapterNumbers: boolean,
	): BranchLeafHierarchy {
		const hierarchy: BranchLeafHierarchy = new this(
			[atom],
			shouldBeConsideredInChapterNumbers,
			[],
		);
		return hierarchy;
	}
	private constructor(
		subAtoms: readonly [
			ChapterHeadingAtom,
			...(readonly NonChapterHeadingAtom[]),
		],
		shouldBeConsideredInChapterNumbers: boolean,
		subHierarchies: readonly LeafHierarchy<Atom>[],
	) {
		super(shouldBeConsideredInChapterNumbers, subAtoms);
		this.subHierarchies = subHierarchies;
	}
	public override *extractAtoms(): Generator<Atom, void, void> {
		for (const subAtom of this.subAtoms) {
			yield subAtom;
		}
		for (const subHierarchy of this.subHierarchies) {
			for (const atomOfSubHierarchy of subHierarchy.extractAtoms()) {
				yield atomOfSubHierarchy;
			}
		}
	}
	public override extractChapterHeadingAtoms(): readonly ChapterHeadingAtom[] {
		const chapterHeadingAtoms: readonly ChapterHeadingAtom[] = [
			...(this.shouldBeConsideredInChapterNumbers ? [this.subAtoms[0]] : []),
			...this.subHierarchies.flatMap(
				(subHierarchy: LeafHierarchy<Atom>): readonly ChapterHeadingAtom[] => {
					const chapterHeadingAtomsOfSubHierarchy: readonly ChapterHeadingAtom[] =
						subHierarchy.extractChapterHeadingAtoms();
					return chapterHeadingAtomsOfSubHierarchy;
				},
			),
		];
		return chapterHeadingAtoms;
	}
	public override extractSources(): readonly Source[] {
		const [firstSubAtom, ...restSubAtoms] = this.subAtoms;
		const sources: readonly Source[] = [
			...restSubAtoms.flatMap(
				(subAtom: NonChapterHeadingAtom): readonly Source[] => {
					const sourcesOfSubAtom: readonly Source[] = subAtom.sources;
					return sourcesOfSubAtom;
				},
			),
			...this.subHierarchies.flatMap(
				(subHierarchy: LeafHierarchy<Atom>): readonly Source[] => {
					const sourcesOfSubHierarchy: readonly Source[] =
						subHierarchy.extractSources();
					return sourcesOfSubHierarchy;
				},
			),
		];
		return sources;
	}
	public override insertChapterHeadingAtomBuilderAtEnd(
		atomBuilder: ChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): {
		readonly insertedAtom: ChapterHeadingAtom;
		readonly newHierarchy: BranchLeafHierarchy;
	} {
		if (atomBuilder.level === this.subAtoms[0].level + 1) {
			const newAtom: ChapterHeadingAtom = atomBuilder.build(
				atomBuilder.shouldBeConsideredInChapterNumbers ?
					chapterNumber.push(this.subHierarchies.length + 1)
				:	chapterNumber,
				0, // TODO
			);
			const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
				...this.subHierarchies,
				BranchLeafHierarchy.create(
					newAtom,
					atomBuilder.shouldBeConsideredInChapterNumbers,
				),
			]).notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
				newAtom,
			);
			return {insertedAtom: newAtom, newHierarchy: newHierarchy};
		} else {
			const lastSubHierarchy =
				this.subHierarchies[this.subHierarchies.length - 1];
			if (lastSubHierarchy === undefined) {
				throw new Error("Bad layout");
			} else {
				const {insertedAtom: insertedAtom, newHierarchy: newLastSubHierarchy} =
					lastSubHierarchy.insertChapterHeadingAtomBuilderAtEnd(
						atomBuilder,
						atomBuilder.shouldBeConsideredInChapterNumbers ?
							chapterNumber.push(this.subHierarchies.length)
						:	chapterNumber,
					);
				const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
					...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
					newLastSubHierarchy,
				]).notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
					insertedAtom,
				);
				return {insertedAtom: insertedAtom, newHierarchy: newHierarchy};
			}
		}
	}
	public override insertNonChapterHeadingAtomBuilderAtEnd(
		atomBuilder: NonChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
		existingSources: readonly Source[],
	): ResultOfInsertingNonChapterHeadingAtomBuilder<NonChapterHeadingAtom> {
		const lastSubHierarchy =
			this.subHierarchies[this.subHierarchies.length - 1];
		if (lastSubHierarchy === undefined) {
			const {atom: newAtom, newSources: newSources} = atomBuilder.build(
				existingSources,
				0, // TODO
			);
			const newHierarchy: BranchLeafHierarchy = this.setSubAtoms([
				...this.subAtoms,
				newAtom,
			]);
			const result: ResultOfInsertingNonChapterHeadingAtomBuilder<NonChapterHeadingAtom> =
				new ResultOfInsertingNonChapterHeadingAtomBuilder<NonChapterHeadingAtom>(
					newHierarchy,
					newSources,
				);
			return result;
		} else {
			const {newHierarchy: newLastSubHierarchy, newSources: newSources} =
				lastSubHierarchy.insertNonChapterHeadingAtomBuilderAtEnd(
					atomBuilder,
					chapterNumber.push(this.subHierarchies.length + 1),
					existingSources,
				);
			const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
				...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
				newLastSubHierarchy,
			]).notifyTableOfSourcesOfNewSourcesWithPropagation(newSources);
			const result: ResultOfInsertingNonChapterHeadingAtomBuilder<NonChapterHeadingAtom> =
				new ResultOfInsertingNonChapterHeadingAtomBuilder<NonChapterHeadingAtom>(
					newHierarchy,
					newSources,
				);
			return result;
		}
	}
	public override insertTableOfChaptersHAtomBuilderAtEnd(
		atomBuilder: TableOfChaptersHChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): {
		readonly insertedAtom: ChapterHeadingAtom;
		readonly newHierarchy: BranchLeafHierarchy;
	} {
		if (atomBuilder.level === this.subAtoms[0].level + 1) {
			const newAtom: ChapterHeadingAtom = atomBuilder.build(
				chapterNumber.push(this.subHierarchies.length + 1),
				0, // TODO
			);
			const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
				...this.subHierarchies,
				TableOfChaptersLeafHierarchy.create(
					newAtom,
					this.extractChapterHeadingAtoms(),
				),
			]).notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
				newAtom,
			);
			return {insertedAtom: newAtom, newHierarchy: newHierarchy};
		} else {
			const lastSubHierarchy =
				this.subHierarchies[this.subHierarchies.length - 1];
			if (lastSubHierarchy === undefined) {
				throw new Error("Bad layout");
			} else {
				const {insertedAtom: insertedAtom, newHierarchy: newLastSubHierarchy} =
					lastSubHierarchy.insertTableOfChaptersHAtomBuilderAtEnd(
						atomBuilder,
						chapterNumber.push(this.subHierarchies.length + 1),
					);
				const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
					...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
					newLastSubHierarchy,
				]).notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
					insertedAtom,
				);
				return {insertedAtom: insertedAtom, newHierarchy: newHierarchy};
			}
		}
	}
	public override insertTableOfSourcesHAtomBuilderAtEnd(
		atomBuilder: TableOfSourcesHChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): {
		readonly insertedAtom: ChapterHeadingAtom;
		readonly newHierarchy: BranchLeafHierarchy;
	} {
		if (atomBuilder.level === this.subAtoms[0].level + 1) {
			const newAtom: ChapterHeadingAtom = atomBuilder.build(
				chapterNumber.push(this.subHierarchies.length + 1),
				0, // TODO
			);
			const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
				...this.subHierarchies,
				TableOfSourcesLeafHierarchy.create(newAtom, this.extractSources()),
			]).notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
				newAtom,
			);
			return {insertedAtom: newAtom, newHierarchy: newHierarchy};
		} else {
			const lastSubHierarchy =
				this.subHierarchies[this.subHierarchies.length - 1];
			if (lastSubHierarchy === undefined) {
				throw new Error("Bad layout");
			} else {
				const {insertedAtom: insertedAtom, newHierarchy: newLastSubHierarchy} =
					lastSubHierarchy.insertTableOfSourcesHAtomBuilderAtEnd(
						atomBuilder,
						chapterNumber.push(this.subHierarchies.length + 1),
					);
				const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies([
					...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
					newLastSubHierarchy,
				]).notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
					insertedAtom,
				);
				return {insertedAtom: insertedAtom, newHierarchy: newHierarchy};
			}
		}
	}
	public override notifyTableOfChaptersOfInsertedChapterHeadingAtomWithoutPropagation(
		insertedAtom: ChapterHeadingAtom,
	): this {
		return this;
	}
	private notifyTableOfChaptersOfInsertedChapterHeadingAtomWithPropagation(
		insertedAtom: ChapterHeadingAtom,
	): BranchLeafHierarchy {
		const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies(
			this.subHierarchies.map(
				(subHierarchy: LeafHierarchy<Atom>): LeafHierarchy<Atom> => {
					const newSubHierarchy: LeafHierarchy<Atom> =
						subHierarchy.notifyTableOfChaptersOfInsertedChapterHeadingAtomWithoutPropagation(
							insertedAtom,
						);
					return newSubHierarchy;
				},
			),
		);
		return newHierarchy;
	}
	public override notifyTableOfChaptersOfMovedChapterHeadingAtomWithoutPropagation(
		moveDatum: MoveDatum,
	): this {
		return this;
	}
	private notifyTableOfChaptersOfMovedChapterHeadingAtomWithPropagation(
		moveData: MoveData,
	): BranchLeafHierarchy {
		for (const moveDatum of moveData) {
			const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies(
				this.subHierarchies.map(
					(subHierarchy: LeafHierarchy<Atom>): LeafHierarchy<Atom> => {
						const newSubHierarchy: LeafHierarchy<Atom> =
							subHierarchy.notifyTableOfChaptersOfMovedChapterHeadingAtomWithoutPropagation(
								moveDatum,
							);
						return newSubHierarchy;
					},
				),
			);
			return newHierarchy;
		}
		return this;
	}
	public override notifyTableOfSourcesOfNewSourcesWithoutPropagation(
		newSources: readonly Source[],
	): this {
		return this;
	}
	private notifyTableOfSourcesOfNewSourcesWithPropagation(
		newSources: readonly Source[],
	): BranchLeafHierarchy {
		const newHierarchy: BranchLeafHierarchy = this.setSubHierarchies(
			this.subHierarchies.map(
				(subHierarchy: LeafHierarchy<Atom>): LeafHierarchy<Atom> => {
					const newSubHierarchy: LeafHierarchy<Atom> =
						subHierarchy.notifyTableOfSourcesOfNewSourcesWithoutPropagation(
							newSources,
						);
					return newSubHierarchy;
				},
			),
		);
		return newHierarchy;
	}
	private setSubAtoms(
		subAtomsToBeSet: readonly [
			ChapterHeadingAtom,
			...(readonly NonChapterHeadingAtom[]),
		],
	): BranchLeafHierarchy {
		const newHierarchy: BranchLeafHierarchy = new BranchLeafHierarchy(
			subAtomsToBeSet,
			this.shouldBeConsideredInChapterNumbers,
			this.subHierarchies,
		);
		return newHierarchy;
	}
	private setSubHierarchies(
		subHierarchiesToBeSet: readonly LeafHierarchy<Atom>[],
	): BranchLeafHierarchy {
		const newHierarchy: BranchLeafHierarchy = new BranchLeafHierarchy(
			this.subAtoms,
			this.shouldBeConsideredInChapterNumbers,
			subHierarchiesToBeSet,
		);
		return newHierarchy;
	}
	private readonly subHierarchies: readonly LeafHierarchy<Atom>[];
}
