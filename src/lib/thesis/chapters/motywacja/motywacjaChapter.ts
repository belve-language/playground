import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import Br from "../../../pages/html/node/implementations/element/implementations/br/Br.svelte";
import Code from "../../../pages/html/node/implementations/element/implementations/code/Code.svelte";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import Li from "../../../pages/html/node/implementations/element/implementations/li/Li.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import Pre from "../../../pages/html/node/implementations/element/implementations/pre/Pre.svelte";
import Strong from "../../../pages/html/node/implementations/element/implementations/strong/Strong.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
export const motywacjaChapter = [
	createElement(H2, {} as const, [createTextNode("Motywacja")]),
	createElement(P, {} as const, [
		createTextNode(
			`W różnych dyskusjach programistycznych często pojawiają się wzmianki o tym, ile linii kodu ma dany codebase, rozwiązanie, algorytm czy funkcja. Liczby te przytaczane są jako miary złożoności kodu – rozumianej nie jako złożoność obliczeniowa, ale jako złożoność poznawcza. Zakłada się bowiem, że im więcej linii kodu, tym trudniej go zrozumieć.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Jest to miara wyjątkowo prosta – we współczesnych edytorach programistycznych numer każdej linii jest widoczny, więc wystarczy sprawdzić numer ostatniej, aby dowiedzieć się, ile linii liczy cały kod. Jednak czy taka miara jest rzeczywiście wiarygodna?`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Nie do końca. We wszystkich popularnych językach programowania można dodawać puste linie i białe znaki, które nie mają żadnego wpływu na działanie programu. Problem ten można częściowo rozwiązać, stosując formater kodu (lub linter, który wskaże zbędne fragmenty, a następnie można je usunąć ręcznie). Po sformatowaniu kodu można odczytać liczbę linii w sposób bardziej obiektywny.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Niestety i to rozwiązanie ma swoje ograniczenia. Styl programowania wciąż ma wpływ na wynik. Przykładowo w języku JavaScript można utworzyć wiele zmiennych w jednej instrukcji:`,
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`const a = 1, b = 2, c = 3;
`),
		]),
	]),
	createElement(P, {} as const, [createTextNode(`lub w wielu instrukcjach:`)]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`const a = 1;
const b = 2;
const c = 3;
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Niektóre formatery potrafią rozbić deklaracje na osobne linie, ale problem pogłębia się w przypadku funkcji, które można zapisać na kilka sposobów:`,
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`function add(a, b) {
	return a + b;
}
`),
		]),
	]),
	createElement(P, {} as const, [createTextNode(`lub`)]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`const add = (a, b) => a + b;
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Formatery zazwyczaj umieszczają wersję z nawiasami klamrowymi w trzech liniach, a wersję strzałkową – w jednej. Otrzymujemy więc różną liczbę linii dla kodów, które z punktu widzenia wykonania są równoważne.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Lintery mogą narzucić spójny styl, co zwiększa wiarygodność liczby linii jako miary złożoności, ale nie rozwiązuje to całego problemu. Gdy kod staje się funkcjonalny, pojawia się kwestia paradygmatu programowania.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Weźmy przykład w JavaScript i napiszmy algorytm sortowania przez wstawianie w stylu imperatywnym:`,
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`function insertionSortImperatively(numbers) {
	const result = [];
	for (let index1 = 0; index1 < numbers.length; index1 = index1 + 1) {
		const number = numbers[index1];
		let insertIndex = 0;
		for (
			let index2 = result.length - 1;
			index2 >= 0;
			index2 = index2 - 1
		) {
			const sortedNumber = result[index2];
			if (number >= sortedNumber) {
				insertIndex = index2 + 1;
				break;
			}
		}
		result.splice(insertIndex, 0, number);
	}
	return result;
}
`),
		]),
	]),
	createElement(P, {} as const, [createTextNode(`lub w stylu deklaratywnym:`)]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`function insertionSortDeclaratively(numbers) {
	return numbers.reduce(
		(accumulatedSortedNumbers, number) => [
			...accumulatedSortedNumbers.filter(
				(sortedNumber) => sortedNumber <= number,
			),
			number,
			...accumulatedSortedNumbers.filter(
				(sortedNumber) => sortedNumber > number,
			),
		],
		[],
	);
}
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Obie wersje są stabilne, nie mutują tablicy wejściowej i mają tę samą złożoność obliczeniową O(n²). Obie zostały sformatowane tym samym formatterem i spełniają te same reguły lintera. Jednak kod deklaratywny jest krótszy – ma mniej linii i znaków.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Pokazuje to, że liczba linii kodu (ani liczba znaków) nie jest w pełni wiarygodną miarą złożoności programu. Rozwiązaniem może być ograniczenie dostępnych konstrukcji języka do minimalnego zestawu – tak, aby różne zapisy tego samego algorytmu były jak najbardziej zbliżone. Można to osiągnąć na dwa sposoby:`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`wybierając język bardzo niskiego poziomu (np. jeden z asemblerów);`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`wybierając język bardzo wysokiego poziomu, który minimalizuje konstrukcje imperatywne (np. Prolog);`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Drugie podejście jest ciekawsze – języki wysokiego poziomu są bardziej przystępne dla programisty, a i tak ostatecznie sprowadzają się do kodu niskopoziomowego.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Jednak nawet w Prologu można ten sam program zapisać na różne sposoby:`,
		),
	]),
	createElement(Li, {marginBlock: "both"} as const, [
		createElement(Pre, {display: "block", marginBlock: "none"} as const, [
			createElement(Code, {} as const, [
				createTextNode(`rodzic(ania, bartek).
rodzic(ania, celina).
`),
			]),
		]),
	]),
	createElement(Li, {marginBlock: "both"} as const, [
		createElement(Pre, {display: "block", marginBlock: "none"} as const, [
			createElement(Code, {} as const, [
				createTextNode(`rodzic(ania, bartek) :- true.
rodzic(ania, celina) :- true.
`),
			]),
		]),
	]),
	createElement(Li, {marginBlock: "both"} as const, [
		createElement(Pre, {display: "block", marginBlock: "none"} as const, [
			createElement(Code, {} as const, [
				createTextNode(`rodzic(X, Y) :-
	X = ania,
	Y = bartek.

rodzic(X, Y) :-
	X = ania,
	Y = celina.
`),
			]),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Całkowita redukcja języka do minimalnego zestawu konstrukcji wydaje się zatem niemożliwa, jeśli zależy nam na czytelności.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Wyobraźmy sobie jednak język, który rezygnuje z następujących konstrukcji:`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Funkcje wieloparametrowe (multi-parameter functions):"),
		]),
		Br,
		createTextNode(
			`Jeśli w języku dostępne są funkcje wyższego rzędu, każdą funkcję wieloparametrową można zapisać jako ciąg funkcji jednoargumentowych przy pomocy techniki currying;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Bloki (blocks):")]),
		Br,
		createTextNode(
			`Blok kodu można zastąpić dodatkową funkcją, która zawiera logikę bloku i zwraca odpowiednie wartości;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Destrukturyzacja (destructuring):"),
		]),
		Br,
		createTextNode(`Można ją rozwinąć do pojedynczych przypisań do zmiennych;`),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Wyrażenia złożone z pominiętymi nawiasami (compound expressions with skipped parentheses):",
			),
		]),
		Br,
		createTextNode(
			`Można wstawić wszystkie brakujące nawiasy, wymuszając jawne grupowanie wyrażeń;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Wyrażenia złożone (compound expressions):"),
		]),
		Br,
		createTextNode(
			`Można rozbić każde wyrażenie na mniejsze fragmenty i przypisać je do osobnych zmiennych pomocniczych;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Instrukcja return (return statement):"),
		]),
		Br,
		createTextNode(
			`Można przyjąć konwencję, że wartością zwracaną przez funkcję jest wynik ostatniego wyrażenia w jej ciele, eliminując potrzebę jawnego słowa kluczowego;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Definiowanie zmiennych poza nagłówkiem funkcji (defining variables outside the function header):",
			),
		]),
		Br,
		createTextNode(
			`Można całkowicie zrezygnować z lokalnych definicji zmiennych poprzez wprowadzenie dodatkowych funkcji i przekazywanie wyników obliczeń bezpośrednio jako argumentów;`,
		),
	]),
	createElement(P, {marginBlock: "none"} as const, [
		createTextNode(
			`Kod w takim języku byłby dłuższy i mniej czytelny, przypominając zapis rachunku lambda, ale za to stanowiłby wierniejszą miarę rzeczywistej złożoności kongnitywnej programu.`,
		),
	]),
	createElement(P, {marginBlock: "none"} as const, [
		createTextNode(
			`Celem tej pracy jest stworzenie języka programowania o możliwie małej liczbie konstrukcji, zachowującego jednocześnie względną czytelność.`,
		),
	]),
] as const satisfies readonly Atom[];
