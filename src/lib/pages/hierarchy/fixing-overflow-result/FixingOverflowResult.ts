import type {Atom} from "../../atom/Atom.ts";
import type {LeafHierarchy} from "../implementations/leaf/LeafHierarchy.ts";
import type {MoveData} from "../move-data/MoveData.ts";
export class FixingOverflowResult<SubAtom extends Atom> {
	public constructor(moveData: MoveData, newHierarchy: LeafHierarchy<SubAtom>) {
		this.moveData = moveData;
		this.newHierarchy = newHierarchy;
	}
	public readonly moveData: MoveData;
	public readonly newHierarchy: LeafHierarchy<SubAtom>;
}
