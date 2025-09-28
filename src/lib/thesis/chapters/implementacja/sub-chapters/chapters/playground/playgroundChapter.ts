import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {SpanAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/span/SpanAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const playgroundChapter = [
	new H3AtomBuilder("Playground"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Wszystkie wcześniejsze komponenty składające się na implementację języka zostały zebrane w interaktywnym środowisku programistycznym dostępnym pod adresem https://belve-language.github.io/playground/. Znaleźć można następujące elementy interfejsu:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Większość okna zajmuje pole tekstowe. To ono przeznaczone jest na kod źródłowy. Kod przetwarzany jest na bieżąco, czyli przy każdej zmianie w polu tekstowym.",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Obok pola tekstowego znajduje się wyświetlacz stanu. W pierwszej kolejności wyświetla on ewentualny błąd składni. Jeśli kod jest poprawny składniowo, wyświetla on ewentualną informację o błędzie abstraktyfikacji. Jeśli również pod tym względem kod jest poprawny, to sprawdzane jest czy w kodzie źródłowym jest funkcja główna. Jeśli jest ona dostępna, to wyświetlany jest przycisk umożliwiający uruchomienie interpretera. Dalsze kliknięcia umożliwiają wykonywanie kolejnych kroków interpretacji. Jeśli skończą się kroki, to przycisk umożliwia ponowne uruchomienie .",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W pobliżu pola tekstowego znajduje się również przycisk umożliwiający wyświetlenie menu z listą przykładowych kodów źródłowych różnych programów implementujących wybrane algorytmy.",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Pod polem tekstowym znajduje się przestrzeń wyświetlająca w postaci list zmienne dostępne i poznane zmienne nieznane w danym momencie interpretacji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Dzięki przekopiowywaniu zakresów węzłów drzewa składni konkretnej do odpowiadających im węzłów drzewa składni abstrakcyjnej, możliwe jest podświetlanie w polu tekstowym fragmentów kodu źródłowego odpowiadających aktualnie interpretowanemu węzłowi drzewa składni abstrakcyjnej. Akcje wykonywane przez interpreter rozróżnia się po kolorach następująco:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new SpanAtomBuilder({color: "var(--failure-dark)"}, [
			new TextAtomBuilder("Czerwony"),
		]),
		new TextAtomBuilder(" – porażka wykonania węzła;"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new SpanAtomBuilder({color: "var(--success-dark)"}, [
			new TextAtomBuilder("Zielony"),
		]),
		new TextAtomBuilder(" – sukces wykonania węzła;"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new SpanAtomBuilder({color: "var(--step-dark)"}, [
			new TextAtomBuilder("Niebieski"),
		]),
		new TextAtomBuilder(
			" – wykonanie kroku węzła. Zawsze nastąpi po nim porażka lub sukces, choć może wydarzyć się to wiele kroków później;",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
