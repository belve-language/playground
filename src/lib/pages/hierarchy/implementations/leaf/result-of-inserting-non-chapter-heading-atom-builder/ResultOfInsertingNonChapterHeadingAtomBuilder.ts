import type {Atom} from "../../../../atom/Atom.ts";
import type {Source} from "../../../../source/Source.ts";
import type {LeafHierarchy} from "../LeafHierarchy.ts";
export class ResultOfInsertingNonChapterHeadingAtomBuilder<
	SubAtom extends Atom,
> {
	public constructor(
		newHierarchy: LeafHierarchy<SubAtom>,
		newSources: readonly Source[],
	) {
		this.newHierarchy = newHierarchy;
		this.newSources = newSources;
	}
	public readonly newHierarchy: LeafHierarchy<SubAtom>;
	public readonly newSources: readonly Source[];
}
