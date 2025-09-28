import ComponentOfSourceAtom from "./component/ComponentOfSourceAtom.svelte";
import {WithoutChildrenNonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/implementations/without-children/WithoutChildrenNonChapterHeadingAtom.ts";
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
		numberOfPage: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: WithoutChildrenNonChapterHeadingAtom =
			new WithoutChildrenNonChapterHeadingAtom(
				bindComponentProps(ComponentOfSourceAtom, {
					number: existingSources.length + 1,
					text: this.text,
				}),
				numberOfPage,
				[this.source],
			);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, [this.source]);
		return result;
	}
	private readonly source: Source;
	private readonly text: string;
}
