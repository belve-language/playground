import type {Atom} from "../atom/Atom.ts";
export class Paging {
	public constructor(
		atoms: readonly [Atom, ...(readonly Atom[])],
		numberOfPage: number,
		shouldHavePageNumber: boolean,
	) {
		this.atoms = atoms;
		this.numberOfPage = numberOfPage;
		this.shouldHavePageNumber = shouldHavePageNumber;
	}
	public addAtom(atomToAdd: Atom): Paging {
		const newPaging: Paging = new Paging(
			[...this.atoms, atomToAdd],
			this.numberOfPage,
			this.shouldHavePageNumber,
		);
		return newPaging;
	}
	public readonly atoms: readonly [Atom, ...(readonly Atom[])];
	public readonly numberOfPage: number;
	public readonly shouldHavePageNumber: boolean;
}
