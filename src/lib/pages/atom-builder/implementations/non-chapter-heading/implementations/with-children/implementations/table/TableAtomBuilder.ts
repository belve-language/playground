import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfTableAtom from "./component/ComponentOfTableAtom.svelte";
export class TableAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(childBuilders: readonly NonChapterHeadingAtomBuilder[]) {
		super(childBuilders, ComponentOfTableAtom);
	}
}
