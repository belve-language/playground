import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const kompilatorChapter = [
	new H3AtomBuilder("Kompilator (compiler)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Program komputerowy, który tłumaczy kod źródłowy napisany w jednym języku programowania na kod w innym języku programowania. Wyróżnić można podtyp kompilatorów - transpilatory, które tłumaczą kod źródłowy na kod źródłowy w innym języku programowania o podobnym poziomie abstrakcji.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
