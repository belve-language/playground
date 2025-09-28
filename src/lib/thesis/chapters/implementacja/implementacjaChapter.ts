import {implementacjaChapterSubChapters} from "./sub-chapters/implementacjaChapterSubChapters.ts";
import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import {TextAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const implementacjaChapter = [
	new H2AtomBuilder("Implementacja"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Implementacja języka Belve polegała na utworzeniu systemu umożliwiającego uruchamianie programów na podstawie kodu źródłowego napisanego w tym języku. Aby to osiągnąć, konieczne było stworzenie kilku kluczowych komponentów systemu, które działają sekwencyjnie.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jako język implementacji całego systemu wybrano TypeScript. Wybór ten został podyktowany faktem, że jego uproszczona wersja – JavaScript – jest językiem natywnym dla przeglądarek internetowych, co pozwala na publikację całego systemu w formie aplikacji webowej. Proces transpilacji do JavaScriptu jest prosty do zautomatyzowania – istnieje wiele gotowych narzędzi wspierających ten proces.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W kolejnych podrozdziałach omówiono poszczególne komponenty systemu w kolejności wynikającej z ich wzajemnych zależności. Można je zatem traktować jako etapy przetwarzania kodu źródłowego.",
		),
	]),
	...implementacjaChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
