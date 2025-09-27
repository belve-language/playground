import type {PreAtomStyles} from "../../../../../../../atom/implementations/non-chapter-heading/implementations/pre/styles/PreAtomStyles.ts";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {WithChildrenNonChapterHeadingAtomBuilder} from "../../WithChildrenNonChapterHeadingAtomBuilder.ts";
import ComponentOfPreAtom from "./component/ComponentOfPreAtom.svelte";
export class PreAtomBuilder extends WithChildrenNonChapterHeadingAtomBuilder {
	public constructor(
		styles: PreAtomStyles,
		childBuilders: readonly NonChapterHeadingAtomBuilder[],
	) {
		super(
			childBuilders,
			bindComponentProps(ComponentOfPreAtom, {styles: styles}),
		);
	}
}
