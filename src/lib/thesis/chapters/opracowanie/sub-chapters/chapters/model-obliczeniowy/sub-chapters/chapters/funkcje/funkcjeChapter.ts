import {funkcjeChapterSubChapters} from "./sub-chapters/funkcjeChapterSubChapters.ts";
import {H4AtomBuilder} from "../../../../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const funkcjeChapter = [
	new H4AtomBuilder("Zbiór funkcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy ustalić czy wśród funkcji jest funkcja główna.",
		),
	]),
	...funkcjeChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
