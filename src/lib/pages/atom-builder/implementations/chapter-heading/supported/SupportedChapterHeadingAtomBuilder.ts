import type {HChapterHeadingAtomBuilder} from "../implementations/h/HChapterHeadingAtomBuilder.ts";
import type {TableOfChaptersHChapterHeadingAtomBuilder} from "../implementations/table-of-chapters-h/TableOfChaptersHChapterHeadingAtomBuilder.ts";
import type {TableOfSourcesHChapterHeadingAtomBuilder} from "../implementations/table-of-sources-h/TableOfSourcesHChapterHeadingAtomBuilder.ts";
export type SupportedChapterHeadingAtomBuilder =
	| HChapterHeadingAtomBuilder
	| TableOfChaptersHChapterHeadingAtomBuilder
	| TableOfSourcesHChapterHeadingAtomBuilder;
