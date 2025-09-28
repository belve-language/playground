import type {Atom} from "../atom/Atom.ts";
export class Paging {
	public static createFromAtom(atom: Atom): Paging {
		const paging: Paging = new Paging(
			[atom],
			atom.numberOfPage,
			atom.shouldHaveNumberOfPage,
		);
		return paging;
	}
	private constructor(
		atoms: readonly [Atom, ...(readonly Atom[])],
		numberOfPage: number,
		shouldHaveNumberOfPage: boolean,
	) {
		this.atoms = atoms;
		this.numberOfPage = numberOfPage;
		this.shouldHaveNumberOfPage = shouldHaveNumberOfPage;
	}
	public addAtom(atomToAdd: Atom): Paging {
		const newPaging: Paging = new Paging(
			[...this.atoms, atomToAdd],
			this.numberOfPage,
			this.shouldHaveNumberOfPage,
		);
		return newPaging;
	}
	public readonly atoms: readonly [Atom, ...(readonly Atom[])];
	public readonly numberOfPage: number;
	public readonly shouldHaveNumberOfPage: boolean;
}
