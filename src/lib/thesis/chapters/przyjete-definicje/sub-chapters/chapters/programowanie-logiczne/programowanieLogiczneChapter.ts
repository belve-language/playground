import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {SourceAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {InternetSource} from "../../../../../../pages/source/Source.ts";
export const programowanieLogiczneChapter = [
	new H3AtomBuilder("Programowanie logiczne (logic programming)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new SourceAtomBuilder(
			"Programowanie logiczne to styl programowania, w którym programy są wyrażane jako zestawy zdań w języku logiki symbolicznej. Programy stworzone w tym stylu nazywa się programami logicznymi, a język, w którym się je pisze – językiem programowania logicznego.",
			new InternetSource(
				"Stanford University",
				new Date(1759064933897),
				`Rozdział 1. z kursu "Introduction to Logic Programming"`,
				"http://logic.stanford.edu/logicprogramming/notes/chapter_01.html",
			),
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
