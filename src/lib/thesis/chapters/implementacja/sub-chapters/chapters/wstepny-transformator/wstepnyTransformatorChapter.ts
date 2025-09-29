import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {SourceAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {InternetSource} from "../../../../../../pages/source/Source.ts";
export const wstepnyTransformatorChapter = [
	new H3AtomBuilder("Wstępny transformator"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Wstępne przetwarzanie kodu źródłowego stanowi pierwszy komponent systemu. Jego jedynym zadaniem jest podział kodu źródłowego na pojedyncze znaki.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W implementacjach innych języków programowania, w tym miejscu, często stosuje się ",
		),
		new SourceAtomBuilder(
			"tokenizację",
			new InternetSource(
				"Nishant Gupta",
				new Date(1759100417289),
				"The Comprehensive Guide to Tokenization: Concepts, Techniques, and Implementation",
				"https://aignishant.medium.com/the-comprehensive-guide-to-tokenization-concepts-techniques-and-implementation-a5f6958e2b2a",
			),
		),
		new TextAtomBuilder(
			". Ułatwia ona działanie parsera, ponieważ eliminuje konieczność rozróżniania słów kluczowych od nazw zmiennych czy obsługi operatorów wieloznakowych. W języku Belve nie jest to jednak konieczne – nie występują tu słowa kluczowe, a wszystkie operatory są jednoznakowe. Tokenizacja mogłaby jedynie uprościć rozpoznawanie nazw zmiennych, ale nie jest to na tyle skomplikowane, aby uzasadnione było dodatkowe zwiększenie złożoności tego etapu. Zamiast tego parser obsługuje ten proces bezpośrednio.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
