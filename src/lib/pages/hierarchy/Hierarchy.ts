import type {Atom} from "../atom/Atom.ts";
export abstract class Hierarchy<SubAtoms extends readonly Atom[]> {
	protected constructor(subAtoms: SubAtoms) {
		this.subAtoms = subAtoms;
	}
	public abstract extractAtoms(): Generator<Atom, void, void>;
	protected readonly subAtoms: SubAtoms;
}
