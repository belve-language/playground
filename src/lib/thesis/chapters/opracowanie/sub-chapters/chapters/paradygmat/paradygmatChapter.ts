import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {H4AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const paradygmatChapter = [
	new H3AtomBuilder("Paradygmat"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Belve jest logicznym językiem programowania. Opiera się na funkcjach, które w rzeczywistości są predykatami. Ciała funkcji składają się z instrukcji, które reprezentują kolejne kroki dowodzenia prawdziwości predykatu. Instrukcje te łączy się za pomocą operatorów logicznych realizujących koniunkcję i dysjunkcję.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W kolejnych rozdziałach pojawią się trzy istotne pojęcia związane ze zmiennymi w kontekście języka Belve. Są to:",
		),
	]),
	new H4AtomBuilder("Zmienna dostępna (available variable)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jest to zmienna, której wartość jest znana w danej instrukcji. Pochodzi ona albo ze znanej albo z poznanej nieznanej. Można wykorzystać j<a jako argument wejściowy (zmienna znana) podczas wywoływania funkcji.",
		),
	]),
	new H4AtomBuilder("Zmienna nieznana (unknown variable)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jest to parametr wyjściowy funkcji. Funkcja nie jest wywoływana z nadaną wartością tej zmiennej, a spodziewane jest, że wartość ta zostanie ustalona podczas wykonywania ciała funkcji i zwrócona do miejsca wywołania. Instrukcje w ciele funkcji dążą do poznania (ustalenia) wartości tej zmiennej. Po jej poznaniu zostaje potraktowana jako zmienna dostępna.",
		),
	]),
	new H4AtomBuilder("Zmienna znana (known variable)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jest to parametr wejściowy funkcji. Funkcja musi zostać wywołana z nadaną wartością tej zmiennej. Podczas wykonywania ciała funkcji zmienna ta traktowana jest jako zmienna dostępna.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
