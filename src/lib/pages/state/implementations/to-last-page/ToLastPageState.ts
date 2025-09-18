import type {Atom} from "../../../atom/Atom.ts";
import type {PagedAtoms} from "../../../paged-atoms/PagedAtoms.ts";
import {State} from "../../State.ts";
import {ToNewPageState} from "../to-new-page/ToNewPageState.ts";
import {toLastPageStateNextAtomTarget} from "./next-atom-target/toLastPageStateNextAtomTarget.ts";
export class ToLastPageState extends State<
	typeof toLastPageStateNextAtomTarget,
	readonly [PagedAtoms, ...(readonly PagedAtoms[])],
	readonly Atom[]
> {
	public static createAfterAtomsChanged(
		atoms: readonly [Atom, ...(readonly Atom[])],
	): ToLastPageState {
		const [firstAtom, ...restAtoms] = atoms;
		const state: ToLastPageState = new this([[firstAtom]], restAtoms);
		return state;
	}
	public constructor(
		pagedAtomses: readonly [PagedAtoms, ...(readonly PagedAtoms[])],
		remainingAtoms: readonly Atom[],
	) {
		super(toLastPageStateNextAtomTarget, pagedAtomses, remainingAtoms);
	}
	public override handleNoOverflowReported(): this | ToLastPageState {
		const [firstRemainingAtom, ...restRemainingAtoms] = this.remainingAtoms;
		if (firstRemainingAtom === undefined) {
			const newState: this = this;
			return newState;
		} else {
			const [firstPagedAtoms, ...restPagedAtomses] = this.pagedAtomses;
			const lastPagedAtoms = restPagedAtomses[restPagedAtomses.length - 1];
			if (lastPagedAtoms === undefined) {
				const newState = new ToLastPageState(
					[[...firstPagedAtoms, firstRemainingAtom]],
					restRemainingAtoms,
				);
				return newState;
			} else {
				const newState = new ToLastPageState(
					[
						firstPagedAtoms,
						...restPagedAtomses.slice(0, -1),
						[...lastPagedAtoms, firstRemainingAtom],
					],
					restRemainingAtoms,
				);
				return newState;
			}
		}
	}
	public override handleOverflowReported(): ToNewPageState {
		const [firstPagedAtoms, ...restPagedAtomses] = this.pagedAtomses;
		const lastPagedAtoms = restPagedAtomses[restPagedAtomses.length - 1];
		if (lastPagedAtoms === undefined) {
			const [firstFirstPagedAtom, ...restFirstPagedAtoms] = firstPagedAtoms;
			const lastFirstPagedAtom =
				restFirstPagedAtoms[restFirstPagedAtoms.length - 1];
			if (lastFirstPagedAtom === undefined) {
				throw new Error(
					"Could not handle overflow reported in ToLastPageState.",
				);
			} else {
				const restFirstPagedAtomsWithoutLastAtom: readonly Atom[] =
					restFirstPagedAtoms.slice(0, -1);
				const newState: ToNewPageState = new ToNewPageState(
					[[firstFirstPagedAtom, ...restFirstPagedAtomsWithoutLastAtom]],
					[lastFirstPagedAtom, ...this.remainingAtoms],
				);
				return newState;
			}
		} else {
			const [firstLastPagedAtom, ...restLastPagedAtoms] = lastPagedAtoms;
			const lastLastPagedAtom =
				restLastPagedAtoms[restLastPagedAtoms.length - 1];
			if (lastLastPagedAtom === undefined) {
				throw new Error(
					"Could not handle overflow reported in ToLastPageState.",
				);
			} else {
				const pagedAtomsesWithoutLastPagedAtoms: readonly (readonly [
					Atom,
					...Atom[],
				])[] = restPagedAtomses.slice(0, -1);
				const restLastPagedAtomsWithoutLastAtom: readonly Atom[] =
					restLastPagedAtoms.slice(0, -1);
				const newState: ToNewPageState = new ToNewPageState(
					[
						...pagedAtomsesWithoutLastPagedAtoms,
						[firstLastPagedAtom, ...restLastPagedAtomsWithoutLastAtom],
					],
					[lastLastPagedAtom, ...this.remainingAtoms],
				);
				return newState;
			}
		}
	}
}
