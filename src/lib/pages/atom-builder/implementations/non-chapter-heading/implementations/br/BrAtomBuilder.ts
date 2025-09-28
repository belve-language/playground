import {WithoutChildrenNonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/implementations/without-children/WithoutChildrenNonChapterHeadingAtom.ts";
import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtomBuilder} from "../../NonChapterHeadingAtomBuilder.ts";
import ComponentOfBrAtom from "./component/ComponentOfBrAtom.svelte";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
export class BrAtomBuilder extends NonChapterHeadingAtomBuilder {
	public constructor() {
		super();
	}
	public override build(
		existingSources: readonly Source[],
		numberOfPage: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: WithoutChildrenNonChapterHeadingAtom =
			new WithoutChildrenNonChapterHeadingAtom(
				ComponentOfBrAtom,
				numberOfPage,
				[],
			);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, []);
		return result;
	}
}
