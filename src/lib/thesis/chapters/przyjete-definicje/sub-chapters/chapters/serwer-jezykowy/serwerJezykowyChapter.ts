import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const serwerJezykowyChapter = [
	new H3AtomBuilder("Serwer językowy (language server)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Program komputerowy będący serwerem, który dostarcza funkcje językowe, takie jak podświetlanie składni, autouzupełnianie, lintowanie i inne, dla edytorów kodu i zintegrowanych środowisk programistycznych.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
