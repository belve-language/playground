import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const efektUbocznyChapter = [
	new H3AtomBuilder("Efekt uboczny (side effect)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Każda operacja wykonywana przez funkcję, która wpływa na stan programu poza zakresem tej funkcji lub w inny sposób oddziałuje ze światem zewnętrznym.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
