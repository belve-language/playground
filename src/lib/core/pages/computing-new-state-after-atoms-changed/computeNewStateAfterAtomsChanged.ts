import type {Atom} from "../atom/Atom.ts";
import {State} from "../state/State.ts";
export function computeNewStateAfterAtomsChanged(
	atoms: readonly [Atom, ...(readonly Atom[])],
): State {
	const [firstAtom, ...restAtoms] = atoms;
	const newState: State = new State("lastPage", [[firstAtom]], restAtoms);
	return newState;
}
