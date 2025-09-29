import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const nawracanieChapter = [
	new H3AtomBuilder("Nawracanie (backtracking)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Technika algorytmiczna polegająca na eksploracji wszystkich możliwych rozwiązań problemu poprzez systematyczne przeszukiwanie przestrzeni rozwiązań. W przypadku napotkania rozwiązania niepoprawnego lub nieoptymalnego, algorytm cofa się do poprzedniego kroku i podąża inną ścieżką wykonania.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
