import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfTbodyAtom from "./component/ComponentOfTbodyAtom.svelte";
export class TbodyAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(buildersOfChildren, ComponentOfTbodyAtom);
	}
}
