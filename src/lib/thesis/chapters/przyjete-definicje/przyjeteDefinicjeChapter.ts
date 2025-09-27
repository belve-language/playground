import {przyjeteDefinicjeChapterSubChapters} from "./sub-chapters/przyjeteDefinicjeChapterSubChapters.ts";
import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import {PAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const przyjeteDefinicjeChapter = [
	new H2AtomBuilder("Przyjęte definicje"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Poniżej znajduje się spis przyjętych w pracy definicji istotnych pojęć. W nawiasach podano ich odpowiedniki w języku angielskim.",
		),
	]),
	...przyjeteDefinicjeChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
