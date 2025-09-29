import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const skroconeEwaluowanieChapter = [
	new H3AtomBuilder("Skrócone ewaluowanie (short-circuit evaluation)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Skrócone ewaluowanie to technika stosowana w wielu językach programowania, w której druga część wyrażenia logicznego nie jest oceniana, jeśli pierwsza część już wystarcza do określenia wyniku.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
