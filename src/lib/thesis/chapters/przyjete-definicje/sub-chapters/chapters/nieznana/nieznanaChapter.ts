import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const nieznanaChapter = [
	new H3AtomBuilder("Nieznana (unknown)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W kontekście języka Belve: Zmienna zdefiniowana jako parametr funkcji, której wartość jest ustalana podczas wykonywania ciała funkcji i zwracana do miejsca wywołania po zakończeniu działania funkcji.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
