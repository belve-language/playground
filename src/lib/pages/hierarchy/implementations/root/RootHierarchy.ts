import type {Atom} from "../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
import {hChapterHeadingAtomBuilderSubTypeName} from "../../../atom-builder/implementations/chapter-heading/implementations/h/sub-type-name/hChapterHeadingAtomBuilderSubTypeName.ts";
import {tableOfChaptersHChapterHeadingAtomBuilderSubTypeName} from "../../../atom-builder/implementations/chapter-heading/implementations/table-of-chapters-h/sub-type-name/tableOfChaptersHChapterHeadingAtomBuilderSubTypeName.ts";
import {tableOfSourcesHChapterHeadingAtomBuilderSubTypeName} from "../../../atom-builder/implementations/chapter-heading/implementations/table-of-sources-h/sub-type-name/tableOfSourcesHChapterHeadingAtomBuilderSubTypeName.ts";
import {chapterHeadingAtomBuilderTypeName} from "../../../atom-builder/implementations/chapter-heading/type-name/chapterHeadingAtomBuilderTypeName.ts";
import {nonChapterHeadingAtomBuilderTypeName} from "../../../atom-builder/implementations/non-chapter-heading/type-name/nonChapterHeadingAtomBuilderTypeName.ts";
import type {SupportedAtomBuilder} from "../../../atom-builder/supported/SupportedAtomBuilder.ts";
import {ChapterNumber} from "../../../chapter-number/ChapterNumber.ts";
import {Paging} from "../../../paging/Paging.ts";
import type {Source} from "../../../source/Source.ts";
import {Hierarchy} from "../../Hierarchy.ts";
import type {MoveData} from "../../move-data/MoveData.ts";
import {LeafHierarchy} from "../leaf/LeafHierarchy.ts";
import {BranchLeafHierarchy} from "../leaf/implementations/branch/BranchLeafHierarchy.ts";
import {TableOfChaptersLeafHierarchy} from "../leaf/implementations/table-of-chapters/TableOfChaptersLeafHierarchy.ts";
import {TableOfSourcesLeafHierarchy} from "../leaf/implementations/table-of-sources/TableOfSourcesLeafHierarchy.ts";
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
		const lastSubHierarchy = subHierarchies[subHierarchies.length - 1];
		if (lastSubHierarchy === undefined) {
			const lastSubAtom = subAtoms[subAtoms.length - 1];
			if (lastSubAtom === undefined) {
				super(1, subAtoms);
			} else {
				super(lastSubAtom.numberOfPage, subAtoms);
			}
		} else {
			super(lastSubHierarchy.numberOfLastPage, subAtoms);
		}
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
		numberOfPage: number,
	): Generator<RootHierarchy, void, void> {
		for (const newHierarchy of this.fixOverflowInSubHierarchies(numberOfPage)) {
			yield newHierarchy;
			return;
		}
		for (const newHierarchy of this.fixOverflowInSubAtoms(numberOfPage)) {
			yield newHierarchy;
			return;
		}
	}
	private *fixOverflowInSubAtoms(
		numberOfPage: number,
	): Generator<RootHierarchy, void, void> {
		for (const [index, subAtom] of this.subAtoms
			.entries()
			.toArray()
			.toReversed()) {
			if (numberOfPage === subAtom.numberOfPage) {
				const newHierarchy: RootHierarchy = this.setSubAtoms([
					...this.subAtoms.slice(0, index),
					subAtom.repage(),
					...this.subAtoms.slice(index + 1),
				]);
				yield newHierarchy;
				return;
			}
		}
	}
	private *fixOverflowInSubHierarchies(
		numberOfPage: number,
	): Generator<RootHierarchy, void, void> {
		for (const [index, subHierarchy] of this.subHierarchies
			.entries()
			.toArray()
			.toReversed()) {
			if (numberOfPage <= subHierarchy.numberOfLastPage) {
				for (const fixingOverflowResult of subHierarchy.fixOverflow(
					numberOfPage,
				)) {
					const newHierarchy: RootHierarchy = this.setSubHierarchies([
						...this.subHierarchies.slice(0, index),
						fixingOverflowResult.newHierarchy,
						...this.subHierarchies.slice(index + 1),
					]).notifyTableOfChaptersOfMovedChapterHeadingAtom(
						fixingOverflowResult.moveData,
					);
					yield newHierarchy;
					return;
				}
			}
		}
	}
	public *generateEveryPaging(): Generator<Paging, void, void> {
		let currentPaging: null | Paging = null;
		for (const atom of this.extractAtoms()) {
			if (currentPaging === null) {
				currentPaging = Paging.createFromAtom(atom);
			} else if (atom.numberOfPage === currentPaging.numberOfPage) {
				currentPaging = currentPaging.addAtom(atom);
			} else {
				yield currentPaging;
				currentPaging = Paging.createFromAtom(atom);
			}
		}
		if (currentPaging !== null) {
			yield currentPaging;
		}
	}
	public insertAtomBuilderAtEnd(
		atomBuilderToInsert: SupportedAtomBuilder,
	): RootHierarchy {
		switch (atomBuilderToInsert.typeName) {
			case chapterHeadingAtomBuilderTypeName: {
				switch (atomBuilderToInsert.subTypeName) {
					case hChapterHeadingAtomBuilderSubTypeName: {
						if (atomBuilderToInsert.level === 1) {
							const newAtom: ChapterHeadingAtom = atomBuilderToInsert.build(
								atomBuilderToInsert.shouldBeConsideredInChapterNumbers ?
									ChapterNumber.createFromOneSegment(
										this.subHierarchies.length + 1,
									)
								:	ChapterNumber.createEmpty(),
								this.numberOfLastPage,
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
										ChapterNumber.createFromOneSegment(
											this.subHierarchies.length,
										)
									:	ChapterNumber.createEmpty(),
								);
								const newHierarchy: RootHierarchy = this.setSubHierarchies([
									...this.subHierarchies.slice(
										0,
										this.subHierarchies.length - 1,
									),
									newLastSubHierarchy,
								]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(
									insertedAtom,
								);
								return newHierarchy;
							}
						}
					}
					case tableOfChaptersHChapterHeadingAtomBuilderSubTypeName: {
						if (atomBuilderToInsert.level === 1) {
							const newAtom: ChapterHeadingAtom = atomBuilderToInsert.build(
								atomBuilderToInsert.shouldBeConsideredInChapterNumbers ?
									ChapterNumber.createFromOneSegment(
										this.subHierarchies.length + 1,
									)
								:	ChapterNumber.createEmpty(),
								this.numberOfLastPage,
							);
							const newHierarchy: RootHierarchy = this.setSubHierarchies([
								...this.subHierarchies,
								TableOfChaptersLeafHierarchy.create(
									newAtom,
									this.extractChapterHeadingAtoms(),
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
								} = lastSubHierarchy.insertTableOfChaptersHAtomBuilderAtEnd(
									atomBuilderToInsert,
									lastSubHierarchy.shouldBeConsideredInChapterNumbers ?
										ChapterNumber.createFromOneSegment(
											this.subHierarchies.length,
										)
									:	ChapterNumber.createEmpty(),
								);
								const newHierarchy: RootHierarchy = this.setSubHierarchies([
									...this.subHierarchies.slice(
										0,
										this.subHierarchies.length - 1,
									),
									newLastSubHierarchy,
								]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(
									insertedAtom,
								);
								return newHierarchy;
							}
						}
					}
					case tableOfSourcesHChapterHeadingAtomBuilderSubTypeName: {
						if (atomBuilderToInsert.level === 1) {
							const newAtom: ChapterHeadingAtom = atomBuilderToInsert.build(
								atomBuilderToInsert.shouldBeConsideredInChapterNumbers ?
									ChapterNumber.createFromOneSegment(
										this.subHierarchies.length + 1,
									)
								:	ChapterNumber.createEmpty(),
								this.numberOfLastPage,
							);
							const newHierarchy: RootHierarchy = this.setSubHierarchies([
								...this.subHierarchies,
								TableOfSourcesLeafHierarchy.create(
									newAtom,
									this.extractSources(),
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
								} = lastSubHierarchy.insertTableOfSourcesHAtomBuilderAtEnd(
									atomBuilderToInsert,
									lastSubHierarchy.shouldBeConsideredInChapterNumbers ?
										ChapterNumber.createFromOneSegment(
											this.subHierarchies.length,
										)
									:	ChapterNumber.createEmpty(),
								);
								const newHierarchy: RootHierarchy = this.setSubHierarchies([
									...this.subHierarchies.slice(
										0,
										this.subHierarchies.length - 1,
									),
									newLastSubHierarchy,
								]).notifyTableOfChaptersOfInsertedChapterHeadingAtom(
									insertedAtom,
								);
								return newHierarchy;
							}
						}
					}
				}
			}
			case nonChapterHeadingAtomBuilderTypeName: {
				const lastSubHierarchy =
					this.subHierarchies[this.subHierarchies.length - 1];
				if (lastSubHierarchy === undefined) {
					const {atom: newAtom, newSources: newSources} =
						atomBuilderToInsert.build(
							this.extractSources(),
							this.numberOfLastPage,
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
