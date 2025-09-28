import ComponentOfBelveCodeAtom from "./component/ComponentOfBelveCodeAtom.svelte";
import {WithoutChildrenNonChapterHeadingAtom} from "../../pages/atom/implementations/non-chapter-heading/implementations/without-children/WithoutChildrenNonChapterHeadingAtom.ts";
import {NonChapterHeadingAtomBuilder} from "../../pages/atom-builder/implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../pages/atom-builder/implementations/non-chapter-heading/building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
import {bindComponentProps} from "../../pages/binding-component-props/bindComponentProps.ts";
import type {Source} from "../../pages/source/Source.ts";
import type {SupportedParsingState} from "../../playground/parsing-state/supported/SupportedParsingState.ts";
import type {State} from "../../playground/state/State.ts";
export class BelveCodeAtomBuilder extends NonChapterHeadingAtomBuilder {
	public constructor(state: State<SupportedParsingState>) {
		super();
		this.state = state;
	}
	public override build(
		existingSources: readonly Source[],
		numberOfPage: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const atom: WithoutChildrenNonChapterHeadingAtom =
			new WithoutChildrenNonChapterHeadingAtom(
				bindComponentProps(ComponentOfBelveCodeAtom, {state: this.state}),
				numberOfPage,
				[],
			);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, []);
		return result;
	}
	private readonly state: State<SupportedParsingState>;
}
