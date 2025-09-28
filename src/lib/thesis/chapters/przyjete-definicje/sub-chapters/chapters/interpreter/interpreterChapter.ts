import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const interpreterChapter = [
	new H3AtomBuilder("Interpreter (interpreter)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Program komputerowy, który bezpośrednio wykonuje kod źródłowy lub jego pośrednią reprezentację, zamiast tłumaczyć go najpierw na kod maszynowy.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
