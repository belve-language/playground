import type {Source} from "../../../source/Source.ts";
import {Atom} from "../../Atom.ts";
import type {Component} from "svelte";
export abstract class NonChapterHeadingAtom extends Atom {
	public constructor(
		component: Component<{readonly [name: string]: never}>,
		numberOfPage: number,
		sources: readonly Source[],
	) {
		super(component, numberOfPage, true);
		this.sources = sources;
	}
	public abstract override repage(): NonChapterHeadingAtom;
	public readonly sources: readonly Source[];
}
