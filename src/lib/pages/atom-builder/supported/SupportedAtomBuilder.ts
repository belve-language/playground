import type {ChapterHeadingAtomBuilder} from "../implementations/chapter-heading/ChapterHeadingAtomBuilder.ts";
import type {NonChapterHeadingAtomBuilder} from "../implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
export type SupportedAtomBuilder =
	| ChapterHeadingAtomBuilder
	| NonChapterHeadingAtomBuilder;
