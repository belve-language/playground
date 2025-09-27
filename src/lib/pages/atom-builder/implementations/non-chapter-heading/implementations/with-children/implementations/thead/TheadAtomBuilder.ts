import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfTheadAtom from "./component/ComponentOfTheadAtom.svelte";
export class TheadAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(childBuilders: readonly NonChapterHeadingAtomBuilder[]) {
		super(childBuilders, ComponentOfTheadAtom);
	}
}
