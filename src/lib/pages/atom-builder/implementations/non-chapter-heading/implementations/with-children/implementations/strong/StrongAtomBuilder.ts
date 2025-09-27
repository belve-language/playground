import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfStrongAtom from "./component/ComponentOfStrongAtom.svelte";
export class StrongAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(childBuilders: readonly NonChapterHeadingAtomBuilder[]) {
		super(childBuilders, ComponentOfStrongAtom);
	}
}
