import type {Component} from "svelte";
export abstract class Atom {
	protected constructor(
		component: Component<{readonly [name: string]: never}>,
		numberOfPage: number,
		shouldHaveNumberOfPage: boolean,
	) {
		this.component = component;
		this.numberOfPage = numberOfPage;
		this.shouldHaveNumberOfPage = shouldHaveNumberOfPage;
	}
	public readonly component: Component<{readonly [name: string]: never}>;
	public readonly numberOfPage: number;
	public abstract repage(): Atom;
	public readonly shouldHaveNumberOfPage: boolean;
}
