import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfThAtom from "./component/ComponentOfThAtom.svelte";
export class ThAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(childBuilders: readonly NonChapterHeadingAtomBuilder[]) {
		super(childBuilders, ComponentOfThAtom);
	}
}
