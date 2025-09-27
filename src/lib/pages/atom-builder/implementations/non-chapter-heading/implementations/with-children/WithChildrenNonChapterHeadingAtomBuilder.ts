import {NonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtomBuilder} from "../../NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
import type {Component} from "svelte";
export abstract class WithChildrenNonChapterHeadingAtomBuilder extends NonChapterHeadingAtomBuilder {
	protected constructor(
		childBuilders: readonly NonChapterHeadingAtomBuilder[],
		component: Component<{readonly children: readonly NonChapterHeadingAtom[]}>,
	) {
		super();
		this.childBuilders = childBuilders;
		this.component = component;
	}
	public override build(
		existingSources: readonly Source[],
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const {children: children, newSources: newSources} =
			this.childBuilders.reduce<{
				children: readonly NonChapterHeadingAtom[];
				newSources: readonly Source[];
			}>(
				(
					accumulator: {
						children: readonly NonChapterHeadingAtom[];
						newSources: readonly Source[];
					},
					builder: NonChapterHeadingAtomBuilder,
				): {
					children: readonly NonChapterHeadingAtom[];
					newSources: readonly Source[];
				} => {
					const result: BuildingResultOfNonChapterHeadingAtomBuilder =
						builder.build(
							[...existingSources, ...accumulator.newSources],
							0, // TODO
						);
					return {
						children: [...accumulator.children, result.atom],
						newSources: [...accumulator.newSources, ...result.newSources],
					};
				},
				{children: [], newSources: []},
			);
		const atom: NonChapterHeadingAtom = new NonChapterHeadingAtom(
			bindComponentProps(this.component, {children: children}),
			0, // TODO
			newSources,
		);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, newSources);
		return result;
	}
	private readonly childBuilders: readonly NonChapterHeadingAtomBuilder[];
	private readonly component: Component<{
		readonly children: readonly NonChapterHeadingAtom[];
	}>;
}
