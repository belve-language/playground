import ComponentOfTextAtom from "./component/ComponentOfTextAtom.svelte";
import {WithoutChildrenNonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/implementations/without-children/WithoutChildrenNonChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtomBuilder} from "../../NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
export class TextAtomBuilder extends NonChapterHeadingAtomBuilder {
	public constructor(text: string) {
		super();
		this.text = text;
	}
	public override build(
		existingSources: readonly Source[],
		numberOfPage: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: WithoutChildrenNonChapterHeadingAtom =
			new WithoutChildrenNonChapterHeadingAtom(
				bindComponentProps(ComponentOfTextAtom, {text: this.text}),
				numberOfPage,
				[],
			);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, []);
		return result;
	}
	private readonly text: string;
}
