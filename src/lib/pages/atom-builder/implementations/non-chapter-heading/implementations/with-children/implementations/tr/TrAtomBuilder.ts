import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfTrAtom from "./component/ComponentOfTrAtom.svelte";
export class TrAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(childBuilders: readonly NonChapterHeadingAtomBuilder[]) {
		super(childBuilders, ComponentOfTrAtom);
	}
}
