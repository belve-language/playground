import type {Atom} from "../atom/Atom.ts";
import type {PagedAtoms} from "../paged-atoms/PagedAtoms.ts";
export abstract class State<
	NextAtomTarget extends string,
	PagedAtomsesToUse extends readonly PagedAtoms[],
	RemainingAtoms extends readonly Atom[],
> {
	protected constructor(
		nextAtomTarget: NextAtomTarget,
		pagedAtomses: PagedAtomsesToUse,
		remainingAtoms: RemainingAtoms,
	) {
		this.nextAtomTarget = nextAtomTarget;
		this.pagedAtomses = pagedAtomses;
		this.remainingAtoms = remainingAtoms;
	}
	public abstract handleNoOverflowReported(): State<
		string,
		readonly PagedAtoms[],
		readonly Atom[]
	>;
	public abstract handleOverflowReported(): State<
		string,
		readonly PagedAtoms[],
		readonly Atom[]
	>;
	public readonly nextAtomTarget: NextAtomTarget;
	public readonly pagedAtomses: PagedAtomsesToUse;
	public readonly remainingAtoms: RemainingAtoms;
}
