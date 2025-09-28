import type {Atom} from "../atom/Atom.ts";
export abstract class Hierarchy<SubAtoms extends readonly Atom[]> {
	protected constructor(numberOfLastPage: number, subAtoms: SubAtoms) {
		this.numberOfLastPage = numberOfLastPage;
		this.subAtoms = subAtoms;
	}
	public abstract extractAtoms(): Generator<Atom, void, void>;
	public readonly numberOfLastPage: number;
	protected readonly subAtoms: SubAtoms;
}
