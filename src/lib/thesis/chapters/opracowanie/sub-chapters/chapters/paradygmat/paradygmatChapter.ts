import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {H4AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const paradygmatChapter = [
	new H3AtomBuilder("Paradygmat"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Belve jest logicznym językiem programowania. Opiera się na funkcjach, które są tak naprawdę predykatami. Ciała funkcji składają się z instrukcji, które są kolejnymi krokami dowodzenia prawdziwości predykatu. Instrukcje łączy się operatorami logicznymi realizującymi koniunkcję i alternatywę.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W przyszłych rozdziałach używane będą istotne trzy pojęcia związane ze zmiennymi w kontekście języka Belve.",
		),
	]),
	new H4AtomBuilder("Zmienna znana (known variable)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jest to parametr wejściowy funkcji. Funkcja musi zostać wywołana z nadaną wartością tej zmiennej. Podczas wykonywania ciała funkcji zmienna ta traktowana jest jako dostępna zmienna.",
		),
	]),
	new H4AtomBuilder("Zmienna dostępna (available variable)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jest to zmienna, której wartość jest znana w danej instrukcji. Pochodzi ona albo ze znanej albo z poznanej nieznanej. Można wykorzystać je jako argumenty wejściowe (znane zmienne) podczas wywoływania funkcji.",
		),
	]),
	new H4AtomBuilder("Zmienna nieznana (unknown variable)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jest to parametr wyjściowy funkcji. Funkcja nie jest wywoływana z nadaną wartością tej zmiennej, a spodziewa się, że wartość ta zostanie ustalona podczas wykonywania ciała funkcji i zwrócona do miejsca wywołania po zakończeniu działania funkcji. Instrukcje w ciele funkcji dążą do poznania (ustalenia) wartości tych zmiennych. Podczas wykonywania ciała funkcji zmienna ta traktowana jest jako dostępna zmienna. W momencie poznania zostają traktowane jako zmienne dostępne.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
