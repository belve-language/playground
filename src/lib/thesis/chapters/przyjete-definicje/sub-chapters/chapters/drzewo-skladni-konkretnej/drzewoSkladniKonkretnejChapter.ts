import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const drzewoSkladniKonkretnejChapter = [
	new H3AtomBuilder("Drzewo składni konkretnej (concrete syntax tree)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Drzewiasta, rekurencyjna struktura danych wiernie odtwarzająca kod źródłowy. Powstaje podczas parsowania. Na jej podstawie można dokładnie odtworzyć kod, z którego została utworzona.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
