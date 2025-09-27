import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const kodZrodlowyChapter = [
	new H3AtomBuilder("Kod źródłowy (source code)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder("Zapis programu komputerowego w języku programowania."),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
