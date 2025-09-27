import type {NonChapterHeadingAtom} from "../../../../atom/implementations/non-chapter-heading/NonChapterHeadingAtom.ts";
import type {Source} from "../../../../source/Source.ts";
export class BuildingResultOfNonChapterHeadingAtomBuilder {
	public constructor(
		atom: NonChapterHeadingAtom,
		newSources: readonly Source[],
	) {
		this.atom = atom;
		this.newSources = newSources;
	}
	public readonly atom: NonChapterHeadingAtom;
	public readonly newSources: readonly Source[];
}
