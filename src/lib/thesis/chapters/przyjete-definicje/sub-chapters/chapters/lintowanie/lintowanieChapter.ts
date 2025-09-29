import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const lintowanieChapter = [
	new H3AtomBuilder("Lintowanie (linting)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Proces analizy kodu źródłowego w celu wykrycia potencjalnych błędów oraz niezgodności z przyjętymi konwencjami i standardami. Przeprowadzaniem lintowania zajmuje się linter.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
