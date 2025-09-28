import ComponentOfTrAtom from "./component/ComponentOfTrAtom.svelte";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
export class TrAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(buildersOfChildren, ComponentOfTrAtom);
	}
}
