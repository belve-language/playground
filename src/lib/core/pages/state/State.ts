import type {Atom} from "../atom/Atom.ts";
import type {PagedAtoms} from "../paged-atoms/PagedAtoms.ts";
export class State {
	public constructor(
		nextAtomTarget: "lastPage" | "newPage",
		pagedAtomses: readonly PagedAtoms[],
		remainingAtoms: readonly Atom[],
	) {
		this.nextAtomTarget = nextAtomTarget;
		this.pagedAtomses = pagedAtomses;
		this.remainingAtoms = remainingAtoms;
	}
	public readonly nextAtomTarget: "lastPage" | "newPage";
	public readonly pagedAtomses: readonly PagedAtoms[];
	public readonly remainingAtoms: readonly Atom[];
}
