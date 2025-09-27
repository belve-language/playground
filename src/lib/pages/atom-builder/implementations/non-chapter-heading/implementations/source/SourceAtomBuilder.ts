import ComponentOfSourceAtom from "./component/ComponentOfSourceAtom.svelte";
import {NonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtomBuilder} from "../../NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
export class SourceAtomBuilder extends NonChapterHeadingAtomBuilder {
	public constructor(text: string, source: Source) {
		super();
		this.text = text;
		this.source = source;
	}
	public override build(
		existingSources: readonly Source[],
		pageNumber: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: NonChapterHeadingAtom = new NonChapterHeadingAtom(
			bindComponentProps(ComponentOfSourceAtom, {
				number: existingSources.length + 1,
				text: this.text,
			}),
			pageNumber,
			[this.source],
		);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, [this.source]);
		return result;
	}
	private readonly source: Source;
	private readonly text: string;
}
