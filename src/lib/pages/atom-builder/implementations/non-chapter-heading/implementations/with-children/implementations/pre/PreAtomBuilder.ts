import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfPreAtom from "./component/ComponentOfPreAtom.svelte";
import type {PreAtomStyles} from "./styles/PreAtomStyles.ts";
export class PreAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: PreAtomStyles,
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			buildersOfChildren,
			bindComponentProps(ComponentOfPreAtom, {styles: styles}),
		);
	}
}
