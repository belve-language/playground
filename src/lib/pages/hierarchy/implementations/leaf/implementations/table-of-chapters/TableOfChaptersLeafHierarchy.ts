import type {Atom} from "../../../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
import {TableOfChaptersLiAtom} from "../../../../../atom/implementations/table-of-chapters-li/TableOfChaptersLiAtom.ts";
import type {HChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/h/HChapterHeadingAtomBuilder.ts";
import type {TableOfChaptersHChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/table-of-chapters-h/TableOfChaptersHChapterHeadingAtomBuilder.ts";
import type {TableOfSourcesHChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/table-of-sources-h/TableOfSourcesHChapterHeadingAtomBuilder.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
import type {ChapterNumber} from "../../../../../chapter-number/ChapterNumber.ts";
import type {Source} from "../../../../../source/Source.ts";
import {MoveDatum} from "../../../../move-datum/MoveDatum.ts";
import {LeafHierarchy} from "../../LeafHierarchy.ts";
import {ResultOfFixingOverflow} from "../../result-of-fixing-overflow/ResultOfFixingOverflow.ts";
export class TableOfChaptersLeafHierarchy extends LeafHierarchy<TableOfChaptersLiAtom> {
	public static create(
		atom: ChapterHeadingAtom,
		existingChapterHeadingAtoms: readonly ChapterHeadingAtom[],
	): TableOfChaptersLeafHierarchy {
		const hierarchy: TableOfChaptersLeafHierarchy = new this([
			atom,
			...existingChapterHeadingAtoms.map(
				(
					chapterHeadingAtom: ChapterHeadingAtom,
					index: number,
				): TableOfChaptersLiAtom => {
					const liAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
						atom.numberOfPage,
						{
							marginBlock: `${
								index === 0 ? "1" : "0"
							}em ${index === existingChapterHeadingAtoms.length - 1 ? "1" : "0"}em`,
						},
						chapterHeadingAtom,
					);
					return liAtom;
				},
			),
		]);
		return hierarchy;
	}
	private constructor(
		subAtoms: readonly [
			ChapterHeadingAtom,
			...(readonly TableOfChaptersLiAtom[]),
		],
	) {
		const [firstSubAtom, ...restSubAtoms] = subAtoms;
		const lastSubAtom = restSubAtoms[restSubAtoms.length - 1] ?? firstSubAtom;
		super(lastSubAtom.numberOfPage, true, subAtoms);
	}
	public override *extractAtoms(): Generator<Atom, void, void> {
		for (const subAtom of this.subAtoms) {
			yield subAtom;
		}
	}
	public override extractChapterHeadingAtoms(): readonly [ChapterHeadingAtom] {
		return [this.subAtoms[0]];
	}
	public override extractSources(): readonly [] {
		return [];
	}
	public override *fixOverflow(
		numberOfPage: number,
	): Generator<ResultOfFixingOverflow<TableOfChaptersLiAtom>, void, void> {
		const [firstSubAtom, ...restSubAtoms] = this.subAtoms;
		for (const [index, restSubAtom] of restSubAtoms
			.entries()
			.toArray()
			.toReversed()) {
			if (numberOfPage === restSubAtom.numberOfPage) {
				const newSubAtom: TableOfChaptersLiAtom = restSubAtom.repage();
				const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
					firstSubAtom,
					...restSubAtoms.slice(0, index),
					newSubAtom,
					...restSubAtoms.slice(index + 1),
				]);
				const result: ResultOfFixingOverflow<TableOfChaptersLiAtom> =
					new ResultOfFixingOverflow([], newHierarchy);
				yield result;
				return;
			}
		}
		if (numberOfPage === firstSubAtom.numberOfPage) {
			const newFirstSubAtom: ChapterHeadingAtom = firstSubAtom.repage();
			const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
				newFirstSubAtom,
				...restSubAtoms,
			]);
			const result: ResultOfFixingOverflow<TableOfChaptersLiAtom> =
				new ResultOfFixingOverflow(
					[new MoveDatum(firstSubAtom, newFirstSubAtom)],
					newHierarchy,
				);
			yield result;
			return;
		}
	}
	public override insertChapterHeadingAtomBuilderAtEnd(
		atomBuilder: HChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): never {
		throw new Error("Bad layout");
	}
	public override insertNonChapterHeadingAtomBuilderAtEnd(
		atomBuilder: NonChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
		existingSources: readonly Source[],
	): never {
		throw new Error("Bad layout");
	}
	public override insertTableOfChaptersHAtomBuilderAtEnd(
		atomBuilder: TableOfChaptersHChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): never {
		throw new Error("Bad layout");
	}
	public override insertTableOfSourcesHAtomBuilderAtEnd(
		atomBuilder: TableOfSourcesHChapterHeadingAtomBuilder,
		chapterNumber: ChapterNumber,
	): never {
		throw new Error("Bad layout");
	}
	public override notifyTableOfChaptersOfInsertedChapterHeadingAtomWithoutPropagation(
		insertedAtom: ChapterHeadingAtom,
	): LeafHierarchy<TableOfChaptersLiAtom> {
		const [firstSubAtom, ...restSubAtoms] = this.subAtoms;
		// const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
		// 	firstSubAtom,
		// 	...restSubAtoms.slice(0, restSubAtoms.length - 1),
		// 	...restSubAtoms
		// 		.slice(restSubAtoms.length - 1)
		// 		.map((subAtom): TableOfChaptersLiAtom => {
		// 			const newSubAtom: TableOfChaptersLiAtom = new TableOfChaptersLiAtom(
		// 				bindComponentProps(ComponentOfTableOfChaptersLiAtom, {
		// 					level: subAtom.level,
		// 					styles: {
		// 						marginBlock: `${restSubAtoms.length === 1 ? "1" : "0"}em 0em`,
		// 					},
		// 					targetAtom: subAtom.targetAtom,
		// 				}),
		// 				subAtom.level,
		// 				subAtom.numberOfPage,
		// 				subAtom.targetAtom,
		// 			);
		// 			return newSubAtom;
		// 		}),
		// 	new TableOfChaptersLiAtom(
		// 		bindComponentProps(ComponentOfTableOfChaptersLiAtom, {
		// 			level: this.subAtoms[0].level,
		// 			styles: {
		// 				marginBlock: `${restSubAtoms.length === 0 ? "1" : "0"}em 1em`,
		// 			},
		// 			targetAtom: insertedAtom,
		// 		}),
		// 		this.subAtoms[0].level,
		// 		this.computeLastPageNumber(),
		// 		insertedAtom,
		// 	),
		// ]);
		// return newHierarchy;
		const [secondSubAtom, ...restRestSubAtoms] = restSubAtoms;
		if (secondSubAtom === undefined) {
			const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
				firstSubAtom,
				new TableOfChaptersLiAtom(
					this.numberOfLastPage,
					{marginBlock: "1em 1em"},
					insertedAtom,
				),
			]);
			return newHierarchy;
		} else {
			const [thirdSubAtom, ...restRestRestSubAtoms] = restRestSubAtoms;
			if (thirdSubAtom === undefined) {
				const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
					firstSubAtom,
					secondSubAtom.setStyles({marginBlock: "1em 0em"}),
					new TableOfChaptersLiAtom(
						this.numberOfLastPage,
						{marginBlock: "0em 1em"},
						insertedAtom,
					),
				]);
				return newHierarchy;
			} else {
				const lastSubAtom =
					restRestRestSubAtoms[restRestRestSubAtoms.length - 1] ?? thirdSubAtom;
				const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
					firstSubAtom,
					secondSubAtom,
					...restRestSubAtoms.slice(0, restRestSubAtoms.length - 1),
					lastSubAtom.setStyles({marginBlock: "0em 0em"}),
					new TableOfChaptersLiAtom(
						this.numberOfLastPage,
						{marginBlock: "0em 1em"},
						insertedAtom,
					),
				]);
				return newHierarchy;
			}
		}
	}
	public override notifyTableOfChaptersOfMovedChapterHeadingAtomWithoutPropagation(
		moveDatum: MoveDatum,
	): TableOfChaptersLeafHierarchy {
		const [firstSubAtom, ...restSubAtoms] = this.subAtoms;
		const newHierarchy: TableOfChaptersLeafHierarchy = this.setSubAtoms([
			firstSubAtom,
			...restSubAtoms.map(
				(subAtom: TableOfChaptersLiAtom): TableOfChaptersLiAtom => {
					if (subAtom.targetAtom === moveDatum.oldChapterHeadingAtom) {
						const newSubAtom: TableOfChaptersLiAtom = subAtom.setTargetAtom(
							moveDatum.newChapterHeadingAtom,
						);
						return newSubAtom;
					} else {
						return subAtom;
					}
				},
			),
		]);
		return newHierarchy;
	}
	public override notifyTableOfSourcesOfNewSourcesWithoutPropagation(
		newSources: readonly Source[],
	): this {
		return this;
	}
	private setSubAtoms(
		subAtomsToBeSet: readonly [
			ChapterHeadingAtom,
			...(readonly TableOfChaptersLiAtom[]),
		],
	): TableOfChaptersLeafHierarchy {
		const newHierarchy: TableOfChaptersLeafHierarchy =
			new TableOfChaptersLeafHierarchy(subAtomsToBeSet);
		return newHierarchy;
	}
}
