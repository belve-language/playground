import ComponentOfLiAtom from "./component/ComponentOfLiAtom.svelte";
import type {LiAtomStyles} from "./styles/LiAtomStyles.ts";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
export class LiAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: LiAtomStyles,
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			buildersOfChildren,
			bindComponentProps(ComponentOfLiAtom, {styles: styles}),
		);
	}
}
