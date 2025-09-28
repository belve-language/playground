import type {Atom} from "../../atom/Atom.ts";
import type {Source} from "../../source/Source.ts";
export class ResultOfBuildingOfAtomBuilder {
	public constructor(atom: Atom, sources: readonly Source[]) {
		this.atom = atom;
		this.sources = sources;
	}
	public readonly atom: Atom;
	public readonly sources: readonly Source[];
}
