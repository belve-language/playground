import {NonChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../../../../atom-builder/implementations/non-chapter-heading/building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtom} from "../../NonChapterHeadingAtom.ts";
import ComponentOfBrAtom from "./component/ComponentOfBrAtom.svelte";
export class BrAtomBuilder extends NonChapterHeadingAtomBuilder {
	public constructor() {
		super();
	}
	public override build(
		existingSources: readonly Source[],
		pageNumber: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: NonChapterHeadingAtom = new NonChapterHeadingAtom(
			ComponentOfBrAtom,
			pageNumber,
			[],
		);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, []);
		return result;
	}
}
