import ComponentOfTableAtom from "./component/ComponentOfTableAtom.svelte";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
export class TableAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		// TODO refact
		styles: {readonly marginBlock: `${number}em ${number}em`},
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			buildersOfChildren,
			bindComponentProps(ComponentOfTableAtom, {styles: styles}),
		);
	}
}
