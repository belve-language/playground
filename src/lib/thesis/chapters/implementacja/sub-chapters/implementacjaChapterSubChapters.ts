import {abstraktyfikatorChapter} from "./chapters/abstraktyfikacja/abstraktyfikatorChapter.ts";
import {interpreterChapter} from "./chapters/interpretacja/interpreterChapter.ts";
import {linterChapter} from "./chapters/lintowanie/linterChapter.ts";
import {parserChapter} from "./chapters/parser/parserChapter.ts";
import {playgroundChapter} from "./chapters/playground/playgroundChapter.ts";
import {wstepnyTransformatorChapter} from "./chapters/wstepny-transformator/wstepnyTransformatorChapter.ts";
import type {SupportedAtomBuilder} from "../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const implementacjaChapterSubChapters = [
	...wstepnyTransformatorChapter,
	...parserChapter,
	...abstraktyfikatorChapter,
	...linterChapter,
	...interpreterChapter,
	...playgroundChapter,
] as const satisfies readonly SupportedAtomBuilder[];
