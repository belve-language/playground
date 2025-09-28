import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const parsowanieChapter = [
	new H3AtomBuilder("Parsowanie (parsing)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Proces przekształcania kodu źródłowego zapisanego jako łańcuch znaków w drzewo składni konkretnej. Przeprowadzaniem parsowania zajmuje się parser.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
