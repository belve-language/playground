import ComponentOfPAtom from "./component/ComponentOfPAtom.svelte";
import type {PAtomStyles} from "./styles/PAtomStyles.ts";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
export class PAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: PAtomStyles,
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			buildersOfChildren,
			bindComponentProps(ComponentOfPAtom, {styles: styles}),
		);
	}
}
