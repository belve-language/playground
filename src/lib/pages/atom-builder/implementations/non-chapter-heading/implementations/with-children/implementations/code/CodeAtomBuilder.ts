import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfCodeAtom from "./component/ComponentOfCodeAtom.svelte";
export class CodeAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(buildersOfChildren, ComponentOfCodeAtom);
	}
}
