import type {Atom} from "../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../atom/implementations/h/implementations/chapter-heading/ChapterHeadingAtom.ts";
import type {SupportedAtomBuilder} from "../../../atom-builder/supported/SupportedAtomBuilder.ts";
import {ChapterNumber} from "../../../chapter-number/ChapterNumber.ts";
import type {Paging} from "../../../paging/Paging.ts";
import type {Source} from "../../../source/Source.ts";
import {Hierarchy} from "../../Hierarchy.ts";
import type {FixingOverflowResult} from "../../fixing-overflow-result/FixingOverflowResult.ts";
import type {MoveData} from "../../move-data/MoveData.ts";
import {LeafHierarchy} from "../leaf/LeafHierarchy.ts";
import {BranchLeafHierarchy} from "../leaf/implementations/branch/BranchLeafHierarchy.ts";
export class RootHierarchy extends Hierarchy<readonly Atom[]> {
	public static createEmpty(): RootHierarchy {
		const hierarchy = new this([], []);
		return hierarchy;
	}
	public static createFromAtomBuilders(
		atomBuilders: readonly SupportedAtomBuilder[],
	): RootHierarchy {
		let hierarchy: RootHierarchy = this.createEmpty();
		for (const atomBuilder of atomBuilders) {
			hierarchy = hierarchy.insertAtomBuilderAtEnd(atomBuilder);
		}
		return hierarchy;
	}
	private constructor(
		subAtoms: readonly Atom[],
		subHierarchies: readonly LeafHierarchy<Atom>[],
	) {
		super(subAtoms);
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
	public extractChapterHeadingAtoms(): readonly ChapterHeadingAtom[] {
		const chapterHeadingAtoms: readonly ChapterHeadingAtom[] =
			this.subHierarchies.flatMap(
				(subHierarchy: LeafHierarchy<Atom>): readonly ChapterHeadingAtom[] => {
					const chapterHeadingAtomsOfSubHierarchy: readonly ChapterHeadingAtom[] =
						subHierarchy.extractChapterHeadingAtoms();
					return chapterHeadingAtomsOfSubHierarchy;
				},
			);
		return chapterHeadingAtoms;
	}
	private extractSources(): readonly Source[] {
		const sources: readonly Source[] = this.subHierarchies.flatMap(
			(subHierarchy: LeafHierarchy<Atom>): readonly Source[] => {
				const sourcesOfSubHierarchy: readonly Source[] =
					subHierarchy.extractSources();
				return sourcesOfSubHierarchy;
			},
		);
		return sources;
	}
	public *fixOverflow(
		pageNumber: number,
	): Generator<FixingOverflowResult<Atom>, void, void> {
		// TODO
	}
	public *generateEveryPaging(): Generator<Paging, void, void> {
		// TODO
	}
	public insertAtomBuilderAtEnd(
		atomBuilderToInsert: SupportedAtomBuilder,
	): RootHierarchy {
		switch (atomBuilderToInsert.typeName) {
			case "chapterHeading": {
				if (atomBuilderToInsert.level === 1) {
					const newAtom: ChapterHeadingAtom = atomBuilderToInsert.build(
						atomBuilderToInsert.shouldBeConsideredInChapterNumbers ?
							ChapterNumber.createFromOneSegment(this.subHierarchies.length + 1)
						:	ChapterNumber.createEmpty(),
						0, // TODO
					);
					const newHierarchy: RootHierarchy = this.setSubHierarchies([
						...this.subHierarchies,
						BranchLeafHierarchy.create(
							newAtom,
							atomBuilderToInsert.shouldBeConsideredInChapterNumbers,
						),
					]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(newAtom);
					return newHierarchy;
				} else {
					const lastSubHierarchy =
						this.subHierarchies[this.subHierarchies.length - 1];
					if (lastSubHierarchy === undefined) {
						throw new Error("Bad layout");
					} else {
						const {
							insertedAtom: insertedAtom,
							newHierarchy: newLastSubHierarchy,
						} = lastSubHierarchy.insertChapterHeadingAtomBuilderAtEnd(
							atomBuilderToInsert,
							lastSubHierarchy.shouldBeConsideredInChapterNumbers ?
								ChapterNumber.createFromOneSegment(this.subHierarchies.length)
							:	ChapterNumber.createEmpty(),
						);
						const newHierarchy: RootHierarchy = this.setSubHierarchies([
							...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
							newLastSubHierarchy,
						]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(insertedAtom);
						return newHierarchy;
					}
				}
			}
			case "nonChapterHeading": {
				const lastSubHierarchy =
					this.subHierarchies[this.subHierarchies.length - 1];
				if (lastSubHierarchy === undefined) {
					const {atom: newAtom, newSources: newSources} =
						atomBuilderToInsert.build(
							this.extractSources(),
							0, // TODO
						);
					const newHierarchy: RootHierarchy = this.setSubAtoms([
						...this.subAtoms,
						newAtom,
					]).notifyTableOfSourcesOfNewSources(newSources);
					return newHierarchy;
				} else {
					const {newHierarchy: newLastSubHierarchy, newSources: newSources} =
						lastSubHierarchy.insertNonChapterHeadingAtomBuilderAtEnd(
							atomBuilderToInsert,
							ChapterNumber.createFromOneSegment(this.subHierarchies.length),
							this.extractSources(),
						);
					const newHierarchy: RootHierarchy = this.setSubHierarchies([
						...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
						newLastSubHierarchy,
					]).notifyTableOfSourcesOfNewSources(newSources);
					return newHierarchy;
				}
			}
			// case "tableOfChaptersH": {
			// 	if (atomBuilderToInsert.level === 1) {
			// 		const newAtom: ChapterHeadingAtom = atomBuilderToInsert.build(
			// 			ChapterNumber.createFromOneSegment(this.subHierarchies.length + 1),
			// 		);
			// 		const newHierarchy: RootHierarchy = this.setSubHierarchies([
			// 			...this.subHierarchies,
			// 			TableOfChaptersLeafHierarchy.create(
			// 				newAtom,
			// 				this.extractChapterHeadingAtoms(),
			// 			),
			// 		]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(newAtom);
			// 		return newHierarchy;
			// 	} else {
			// 		const lastSubHierarchy =
			// 			this.subHierarchies[this.subHierarchies.length - 1];
			// 		if (lastSubHierarchy === undefined) {
			// 			throw new Error("Bad layout");
			// 		} else {
			// 			const {
			// 				insertedAtom: insertedAtom,
			// 				newHierarchy: newLastSubHierarchy,
			// 			} = lastSubHierarchy.insertTableOfChaptersHAtomBuilderAtEnd(
			// 				atomBuilderToInsert,
			// 				lastSubHierarchy.shouldBeConsideredInChapterNumbers ?
			// 					ChapterNumber.createFromOneSegment(this.subHierarchies.length)
			// 				:	ChapterNumber.createEmpty(),
			// 			);
			// 			const newHierarchy: RootHierarchy = this.setSubHierarchies([
			// 				...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
			// 				newLastSubHierarchy,
			// 			]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(insertedAtom);
			// 			return newHierarchy;
			// 		}
			// 	}
			// }
			// case "tableOfSourcesH": {
			// 	if (atomBuilderToInsert.level === 1) {
			// 		const newAtom: ChapterHeadingAtom = atomBuilderToInsert.build(
			// 			ChapterNumber.createFromOneSegment(this.subHierarchies.length + 1),
			// 		);
			// 		const newHierarchy: RootHierarchy = this.setSubHierarchies([
			// 			...this.subHierarchies,
			// 			TableOfSourcesLeafHierarchy.create(newAtom, this.extractSources()),
			// 		]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(newAtom);
			// 		return newHierarchy;
			// 	} else {
			// 		const lastSubHierarchy =
			// 			this.subHierarchies[this.subHierarchies.length - 1];
			// 		if (lastSubHierarchy === undefined) {
			// 			throw new Error("Bad layout");
			// 		} else {
			// 			const {
			// 				insertedAtom: insertedAtom,
			// 				newHierarchy: newLastSubHierarchy,
			// 			} = lastSubHierarchy.insertTableOfSourcesHAtomBuilderAtEnd(
			// 				atomBuilderToInsert,
			// 				lastSubHierarchy.shouldBeConsideredInChapterNumbers ?
			// 					ChapterNumber.createFromOneSegment(this.subHierarchies.length)
			// 				:	ChapterNumber.createEmpty(),
			// 			);
			// 			const newHierarchy: RootHierarchy = this.setSubHierarchies([
			// 				...this.subHierarchies.slice(0, this.subHierarchies.length - 1),
			// 				newLastSubHierarchy,
			// 			]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(insertedAtom);
			// 			return newHierarchy;
			// 		}
			// 	}
			// }
		}
	}
	private notifyTableOfChaptersOfInsertedChapterHeadingAtom(
		insertedAtom: ChapterHeadingAtom,
	): RootHierarchy {
		const newHierarchy: RootHierarchy = this.setSubHierarchies(
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
	private notifyTableOfChaptersOfMovedChapterHeadingAtom(
		moveData: MoveData,
	): RootHierarchy {
		for (const moveDatum of moveData) {
			const newHierarchy: RootHierarchy = this.setSubHierarchies(
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
	private notifyTableOfSourcesOfNewSources(
		newSources: readonly Source[],
	): RootHierarchy {
		const newHierarchy: RootHierarchy = this.setSubHierarchies(
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
	private setSubAtoms(subAtomsToBeSet: readonly Atom[]): RootHierarchy {
		const newHierarchy: RootHierarchy = new RootHierarchy(
			subAtomsToBeSet,
			this.subHierarchies,
		);
		return newHierarchy;
	}
	private setSubHierarchies(
		subHierarchiesToBeSet: readonly LeafHierarchy<Atom>[],
	): RootHierarchy {
		const newHierarchy: RootHierarchy = new RootHierarchy(
			this.subAtoms,
			subHierarchiesToBeSet,
		);
		return newHierarchy;
	}
	private readonly subHierarchies: readonly LeafHierarchy<Atom>[];
}
