import type {Atom} from "../atom/Atom.ts";
export abstract class ConcreteSyntaxTreeNode<AtomToUse extends Atom> {
	protected constructor(atom: AtomToUse) {
		this.atom = atom;
	}
	public readonly atom: AtomToUse;
}
