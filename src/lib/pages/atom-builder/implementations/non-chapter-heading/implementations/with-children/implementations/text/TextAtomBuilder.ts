import ComponentOfTextAtom from "./component/ComponentOfTextAtom.svelte";
import {NonChapterHeadingAtom} from "../../../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../../../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../../../../../source/Source.ts";
import {NonChapterHeadingAtomBuilder} from "../../../../NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../../../building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
export class TextAtomBuilder extends NonChapterHeadingAtomBuilder {
	public constructor(text: string) {
		super();
		this.text = text;
	}
	public override build(
		existingSources: readonly Source[],
		pageNumber: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: NonChapterHeadingAtom = new NonChapterHeadingAtom(
			bindComponentProps(ComponentOfTextAtom, {text: this.text}),
			pageNumber,
			[],
		);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, []);
		return result;
	}
	private readonly text: string;
}
