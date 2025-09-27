import type {Source} from "../../../source/Source.ts";
import {AtomBuilder} from "../../AtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "./building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
import {nonChapterHeadingAtomBuilderTypeName} from "./type-name/nonChapterHeadingAtomBuilderTypeName.ts";
export abstract class NonChapterHeadingAtomBuilder extends AtomBuilder<
	typeof nonChapterHeadingAtomBuilderTypeName
> {
	protected constructor() {
		super(nonChapterHeadingAtomBuilderTypeName);
	}
	public abstract build(
		existingSources: readonly Source[],
		pageNumber: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder;
}
