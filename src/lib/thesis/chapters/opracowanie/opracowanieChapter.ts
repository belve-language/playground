import {opracowanieChapterSubChapters} from "./sub-chapters/opracowanieChapterSubChapters.ts";
import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import {TextAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const opracowanieChapter = [
	new H2AtomBuilder("Opracowanie"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Rozdział ten poświęcony jest teoretycznym podstawom wymyślonego w ramach pracy języka programowania o nazwie "Belve", w tym jego koncepcjom, składni, semantyce oraz zasadom działania. Bazuje na nich omówiona później implementacja systemu umożliwiającego wykonywanie programów napisanych w tym języku.',
		),
	]),
	...opracowanieChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
