import {modelObliczeniowyChapterSubChapters} from "./sub-chapters/modelObliczeniowyChapterSubChapters.ts";
import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const modelObliczeniowyChapter = [
	new H3AtomBuilder("Model obliczeniowy"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W tym rozdziale przedstawiono formalny opis tego, jak wykonywany jest program napisany w języku Belve. Można rodzielić go na kilka współpracujących ze sobą komponentów, które zostaną omówione w podrozdziałach.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Uwzględnić należy pewien zbiór funkcji wbudowanych, które są dostępne bez definiowania ich.",
		),
	]),
	...modelObliczeniowyChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
