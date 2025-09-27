import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfLiAtom from "./component/ComponentOfLiAtom.svelte";
import type {LiAtomStyles} from "./styles/LiAtomStyles.ts";
export class LiAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: LiAtomStyles,
		childBuilders: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			childBuilders,
			bindComponentProps(ComponentOfLiAtom, {styles: styles}),
		);
	}
}
