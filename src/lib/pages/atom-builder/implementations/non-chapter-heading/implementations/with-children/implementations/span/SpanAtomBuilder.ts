import ComponentOfSpanAtom from "./component/ComponentOfSpanAtom.svelte";
import type {SpanAtomStyles} from "./styles/SpanAtomStyles.ts";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
export class SpanAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: SpanAtomStyles,
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			buildersOfChildren,
			bindComponentProps(ComponentOfSpanAtom, {styles: styles}),
		);
	}
}
