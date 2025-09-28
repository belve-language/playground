import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const drzewoSkladniAbstrakcyjnejChapter = [
	new H3AtomBuilder("Drzewo składni abstrakcyjnej (abstract syntax tree)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Drzewiasta struktura danych reprezentująca kod źródłowy w sposób uproszczony – zawiera jedynie informacje istotne z punktu widzenia wykonania programu. Tworzona jest w wyniku abstraktyfikacji drzewa składni konkretnej. Nie można z niej wiernie odtworzyć pierwotnego kodu źródłowego, ponieważ różne reprezentacje konkretne mogą odpowiadać temu samemu drzewu składni abstrakcyjnej. Można jednak, przyjmując ustalone zasady konkretyfikacji, deterministycznie zbudować z niej kod źródłowy, który sprowadza się do tej samej reprezentacji abstrakcyjnej.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
