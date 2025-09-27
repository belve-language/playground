import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const abstraktyfikacjaChapter = [
	new H3AtomBuilder("Abstraktyfikacja (abstractifying)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Proces zamiany kodu źródłowego zapisanego jako drzewo składni konkretnej na kod źródłowy zapisany jako drzewo składni abstrakcyjnej. Proces ten nie jest w pełni odwracalny, ponieważ wiele drzew składni konkretnej może odpowiadać temu samemu drzewu składni abstrakcyjnej.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
