import {H5AtomBuilder} from "../../../../../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/5/H5AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const funkcjeChapterSubChapters = [
	new H5AtomBuilder("Zbiór funkcji bez funkcji głównej"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Zbioru funkcji bez funkcji głównej nie można wykonać, bo nie istnieje punkt wejściowy dla obliczeń.",
		),
	]),
	new H5AtomBuilder("Zbiór funkcji z funkcją główną"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy wywołać funkcję główną z pustym ciągiem znanych w postaci pozycyjnej. Każdy wynik jej wywołania będzie wynikiem uruchomienia programu. Funkcja główna nie definiuje żadnych nieznanych, więc wyniki będą zawierały pusty ciąg nieznanych.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
