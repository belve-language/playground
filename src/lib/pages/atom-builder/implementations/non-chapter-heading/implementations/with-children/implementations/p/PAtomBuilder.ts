import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfPAtom from "./component/ComponentOfPAtom.svelte";
import type {PAtomStyles} from "./styles/PAtomStyles.ts";
export class PAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: PAtomStyles,
		childBuilders: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			childBuilders,
			bindComponentProps(ComponentOfPAtom, {styles: styles}),
		);
	}
}
