import {NonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
import {WithChildrenNonChapterHeadingAtom} from "../../../../../atom/implementations/non-chapter-heading/implementations/with-children/WithChildrenNonChapterHeadingAtom.ts";
import {bindComponentProps} from "../../../../../binding-component-props/bindComponentProps.ts";
import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtomBuilder} from "../../NonChapterHeadingAtomBuilder.ts";
import {BuildingResultOfNonChapterHeadingAtomBuilder} from "../../building-result/BuildingResultOfNonChapterHeadingAtomBuilder.ts";
import type {Component} from "svelte";
export abstract class WithChildrenNonChapterHeadingAtomBuilder extends NonChapterHeadingAtomBuilder {
	protected constructor(
		buildersOfChildren: readonly NonChapterHeadingAtomBuilder[],
		component: Component<{readonly children: readonly NonChapterHeadingAtom[]}>,
	) {
		super();
		this.buildersOfChildren = buildersOfChildren;
		this.component = component;
	}
	public override build(
		existingSources: readonly Source[],
		numberOfPage: number,
	): BuildingResultOfNonChapterHeadingAtomBuilder {
		const {children: children, newSources: newSources} =
			this.buildersOfChildren.reduce<{
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
							numberOfPage,
						);
					return {
						children: [...accumulator.children, result.atom],
						newSources: [...accumulator.newSources, ...result.newSources],
					};
				},
				{children: [], newSources: []},
			);
		const atom: NonChapterHeadingAtom = new WithChildrenNonChapterHeadingAtom(
			children,
			bindComponentProps(this.component, {children: children}),
			numberOfPage,
			newSources,
		);
		const result: BuildingResultOfNonChapterHeadingAtomBuilder =
			new BuildingResultOfNonChapterHeadingAtomBuilder(atom, newSources);
		return result;
	}
	private readonly buildersOfChildren: readonly NonChapterHeadingAtomBuilder[];
	private readonly component: Component<{
		readonly children: readonly NonChapterHeadingAtom[];
	}>;
}
