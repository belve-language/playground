import type {Atom} from "../../../../../atom/Atom.ts";
import type {ChapterHeadingAtom} from "../../../../../atom/implementations/chapter-heading/ChapterHeadingAtom.ts";
import {TableOfSourcesLiAtom} from "../../../../../atom/implementations/table-of-sources-li/TableOfSourcesLiAtom.ts";
import type {HChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/h/HChapterHeadingAtomBuilder.ts";
import type {TableOfChaptersHChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/table-of-chapters-h/TableOfChaptersHChapterHeadingAtomBuilder.ts";
import type {TableOfSourcesHChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/chapter-heading/implementations/table-of-sources-h/TableOfSourcesHChapterHeadingAtomBuilder.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
import type {ChapterNumber} from "../../../../../chapter-number/ChapterNumber.ts";
import type {Source} from "../../../../../source/Source.ts";
import {MoveDatum} from "../../../../move-datum/MoveDatum.ts";
import {LeafHierarchy} from "../../LeafHierarchy.ts";
import {ResultOfFixingOverflow} from "../../result-of-fixing-overflow/ResultOfFixingOverflow.ts";
export class TableOfSourcesLeafHierarchy extends LeafHierarchy<TableOfSourcesLiAtom> {
	public static create(
		atom: ChapterHeadingAtom,
		existingSources: readonly Source[],
	): TableOfSourcesLeafHierarchy {
		const hierarchy: TableOfSourcesLeafHierarchy = new this([
			atom,
			...existingSources.map(
				(source: Source, index: number): TableOfSourcesLiAtom => {
					const number: number = index + 1;
					const liAtom: TableOfSourcesLiAtom = new TableOfSourcesLiAtom(
						number,
						atom.numberOfPage,
						source,
						{marginBlock: "1em 1em"},
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
			...(readonly TableOfSourcesLiAtom[]),
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
	): Generator<ResultOfFixingOverflow<TableOfSourcesLiAtom>, void, void> {
		const [firstSubAtom, ...restSubAtoms] = this.subAtoms;
		for (const [index, restSubAtom] of restSubAtoms
			.entries()
			.toArray()
			.toReversed()) {
			if (numberOfPage === restSubAtom.numberOfPage) {
				const newSubAtom: TableOfSourcesLiAtom = restSubAtom.repage();
				const newHierarchy: TableOfSourcesLeafHierarchy = this.setSubAtoms([
					firstSubAtom,
					...restSubAtoms.slice(0, index),
					newSubAtom,
					...restSubAtoms.slice(index + 1),
				]);
				const result: ResultOfFixingOverflow<TableOfSourcesLiAtom> =
					new ResultOfFixingOverflow([], newHierarchy);
				yield result;
				return;
			}
		}
		if (numberOfPage === firstSubAtom.numberOfPage) {
			const newFirstSubAtom: ChapterHeadingAtom = firstSubAtom.repage();
			const newHierarchy: TableOfSourcesLeafHierarchy = this.setSubAtoms([
				newFirstSubAtom,
				...restSubAtoms,
			]);
			const result: ResultOfFixingOverflow<TableOfSourcesLiAtom> =
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
	): TableOfSourcesLeafHierarchy {
		return this;
	}
	public override notifyTableOfChaptersOfMovedChapterHeadingAtomWithoutPropagation(
		moveDatum: MoveDatum,
	): this {
		return this;
	}
	public override notifyTableOfSourcesOfNewSourcesWithoutPropagation(
		newSources: readonly Source[],
	): TableOfSourcesLeafHierarchy {
		const [firstSubAtom, ...restSubAtoms] = this.subAtoms;
		const lastSubAtom = restSubAtoms[restSubAtoms.length - 1] ?? firstSubAtom;
		const newHierarchy: TableOfSourcesLeafHierarchy = this.setSubAtoms([
			firstSubAtom,
			...restSubAtoms,
			...newSources.map(
				(source: Source, index: number): TableOfSourcesLiAtom => {
					const number: number = restSubAtoms.length + index + 1;
					const atom: TableOfSourcesLiAtom = new TableOfSourcesLiAtom(
						number,
						this.numberOfLastPage,
						source,
						{marginBlock: "1em 1em"},
					);
					return atom;
				},
			),
		]);
		return newHierarchy;
	}
	private setSubAtoms(
		subAtomsToBeSet: readonly [
			ChapterHeadingAtom,
			...(readonly TableOfSourcesLiAtom[]),
		],
	): TableOfSourcesLeafHierarchy {
		const newHierarchy: TableOfSourcesLeafHierarchy =
			new TableOfSourcesLeafHierarchy(subAtomsToBeSet);
		return newHierarchy;
	}
}
