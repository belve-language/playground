import {opracowanieChapterSubChapters} from "./sub-chapters/opracowanieChapterSubChapters.ts";
import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const opracowanieChapter = [
	new H2AtomBuilder("Opracowanie"),
	...opracowanieChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
