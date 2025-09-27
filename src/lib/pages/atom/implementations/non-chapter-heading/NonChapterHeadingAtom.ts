import type {Source} from "../../../source/Source.ts";
import {Atom} from "../../Atom.ts";
import type {Component} from "svelte";
export class NonChapterHeadingAtom extends Atom {
	public constructor(
		component: Component<{readonly [name: string]: never}>,
		pageNumber: number,
		sources: readonly Source[],
	) {
		super(component, pageNumber);
		this.sources = sources;
	}
	public readonly sources: readonly Source[];
}
