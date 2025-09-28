import type {Source} from "../../../../../source/Source.ts";
import {NonChapterHeadingAtom} from "../../NonChapterHeadingAtom.ts";
import type {Component} from "svelte";
export class WithoutChildrenNonChapterHeadingAtom extends NonChapterHeadingAtom {
	public constructor(
		component: Component<{readonly [name: string]: never}>,
		numberOfPage: number,
		sources: readonly Source[],
	) {
		super(component, numberOfPage, sources);
	}
	public override repage(): WithoutChildrenNonChapterHeadingAtom {
		const newAtom: WithoutChildrenNonChapterHeadingAtom =
			new WithoutChildrenNonChapterHeadingAtom(
				this.component,
				this.numberOfPage + 1,
				this.sources,
			);
		return newAtom;
	}
}
