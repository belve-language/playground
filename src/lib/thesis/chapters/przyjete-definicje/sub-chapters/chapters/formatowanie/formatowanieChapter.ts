import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const formatowanieChapter = [
	new H3AtomBuilder("Formatowanie (formatting)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Proces edycji kodu źródłowego w taki sposób, aby zachowując jego funkcjonalność, uczynić go bardziej czytelnym. Przeprowadzaniem go zajmuje się formater.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
