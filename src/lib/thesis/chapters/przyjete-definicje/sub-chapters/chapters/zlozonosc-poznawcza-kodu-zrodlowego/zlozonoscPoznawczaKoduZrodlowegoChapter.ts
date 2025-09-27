import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const zlozonoscPoznawczaKoduZrodlowegoChapter = [
	new H3AtomBuilder(
		"Złożoność poznawcza kodu źródłowego (cognitive complexity of source code)",
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Miara określająca, jak trudny do zrozumienia jest kod źródłowy programu z perspektywy programisty.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
