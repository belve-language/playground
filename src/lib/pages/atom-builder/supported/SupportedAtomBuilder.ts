import type {SupportedChapterHeadingAtomBuilder} from "../implementations/chapter-heading/supported/SupportedChapterHeadingAtomBuilder.ts";
import type {NonChapterHeadingAtomBuilder} from "../implementations/non-chapter-heading/NonChapterHeadingAtomBuilder.ts";
export type SupportedAtomBuilder =
	| NonChapterHeadingAtomBuilder
	| SupportedChapterHeadingAtomBuilder;
