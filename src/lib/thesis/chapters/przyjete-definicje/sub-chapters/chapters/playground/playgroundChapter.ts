import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {SourceAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {Source} from "../../../../../../pages/source/Source.ts";
export const playgroundChapter = [
	new H3AtomBuilder("Playground (playground)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new SourceAtomBuilder(
			"Środowisko do eksperymentowania z kodem źródłowym w czasie rzeczywistym, pozwalające na jego edycję i natychmiastowe sprawdzenie efektów. Najczęściej wymaga minimalnej lub żadnej konfiguracji ze strony użytkownika.",
			new Source(
				`Wyjaśnienie pojęcia "playground" w kontekście programistycznym z bloga serwisu snappify`,
				"https://snappify.com/blog/best-code-playgrounds#what-are-code-playgrounds",
			),
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
