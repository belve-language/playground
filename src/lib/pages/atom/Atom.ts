import type {Component} from "svelte";
export abstract class Atom {
	protected constructor(
		component: Component<{readonly [name: string]: never}>,
		pageNumber: number,
	) {
		this.component = component;
		this.pageNumber = pageNumber;
	}
	public readonly component: Component<{readonly [name: string]: never}>;
	public readonly pageNumber: number;
}
