import type {Atom} from "../atom/Atom.ts";
import {ToLastPageState} from "../state/implementations/to-last-page/ToLastPageState.ts";
export function computeNewStateAfterAtomsChanged(
	atoms: readonly [Atom, ...(readonly Atom[])],
): ToLastPageState {
	const [firstAtom, ...restAtoms] = atoms;
	const newState: ToLastPageState = new ToLastPageState(
		[[firstAtom]],
		restAtoms,
	);
	return newState;
}
