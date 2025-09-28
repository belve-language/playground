import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtom} from "../../NonChapterHeadingAtom.ts";
import type {Component} from "svelte";
export class WithChildrenNonChapterHeadingAtom extends NonChapterHeadingAtom {
	public constructor(
		children: readonly NonChapterHeadingAtom[],
		component: Component<{readonly [name: string]: never}>,
		numberOfPage: number,
		sources: readonly Source[],
	) {
		super(component, numberOfPage, sources);
		this.children = children;
	}
	private readonly children: readonly NonChapterHeadingAtom[];
	public override repage(): WithChildrenNonChapterHeadingAtom {
		const newAtom: WithChildrenNonChapterHeadingAtom =
			new WithChildrenNonChapterHeadingAtom(
				this.children.map(
					(child: NonChapterHeadingAtom): NonChapterHeadingAtom => {
						const newChild: NonChapterHeadingAtom = child.repage();
						return newChild;
					},
				),
				this.component,
				this.numberOfPage + 1,
				this.sources,
			);
		return newAtom;
	}
}
