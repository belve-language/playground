import type {SpanAtomStyles} from "./styles/SpanAtomStyles.ts";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfSpanAtom from "./component/ComponentOfSpanAtom.svelte";
export class SpanAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: SpanAtomStyles,
		childBuilders: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			childBuilders,
			bindComponentProps(ComponentOfSpanAtom, {styles: styles}),
		);
	}
}
