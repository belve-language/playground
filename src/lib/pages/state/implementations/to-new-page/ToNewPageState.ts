import type {Atom} from "../../../atom/Atom.ts";
import type {PagedAtoms} from "../../../paged-atoms/PagedAtoms.ts";
import {State} from "../../State.ts";
import {ToLastPageState} from "../to-last-page/ToLastPageState.ts";
import {toNewPageStateNextAtomTarget} from "./next-atom-target/toNewPageStateNextAtomTarget.ts";
export class ToNewPageState extends State<
	typeof toNewPageStateNextAtomTarget,
	readonly PagedAtoms[],
	readonly [Atom, ...(readonly Atom[])]
> {
	public static createEmpty(
		atoms: readonly [Atom, ...(readonly Atom[])],
	): ToNewPageState {
		const state = new ToNewPageState([], atoms);
		return state;
	}
	public constructor(
		pagedAtomses: readonly PagedAtoms[],
		remainingAtoms: readonly [Atom, ...(readonly Atom[])],
	) {
		super(toNewPageStateNextAtomTarget, pagedAtomses, remainingAtoms);
	}
	public override handleNoOverflowReported(): ToLastPageState {
		const [firstRemainingAtom, ...restRemainingAtoms] = this.remainingAtoms;
		const [firstPagedAtoms, ...restPagedAtomses] = this.pagedAtomses;
		if (firstPagedAtoms === undefined) {
			const newState = new ToLastPageState(
				[[firstRemainingAtom]],
				restRemainingAtoms,
			);
			return newState;
		} else {
			const newState = new ToLastPageState(
				[firstPagedAtoms, ...restPagedAtomses, [firstRemainingAtom]],
				restRemainingAtoms,
			);
			return newState;
		}
	}
	public override handleOverflowReported(): never {
		throw new Error("Could not handle overflow reported in ToNewPageState.");
	}
}
