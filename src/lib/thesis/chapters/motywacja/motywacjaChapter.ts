import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import {BrAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/br/BrAtomBuilder.ts";
import {SourceAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {TextAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {CodeAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/code/CodeAtomBuilder.ts";
import {LiAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {StrongAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/strong/StrongAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {Source} from "../../../pages/source/Source.ts";
import {basePreAtomStyles} from "../../base-pre-atom-styles/basePreAtomStyles.ts";
export const motywacjaChapter = [
	new H2AtomBuilder("Motywacja"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`W różnych dyskusjach programistycznych często pojawiają się wzmianki o tym, ile linii kodu ma dany codebase, rozwiązanie, algorytm czy funkcja. Liczby te przytaczane są jako miary złożoności kodu – rozumianej nie jako złożoność obliczeniowa, ale jako złożoność poznawcza. Zakłada się bowiem, że im więcej linii kodu, tym trudniej go zrozumieć.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Jest to miara wyjątkowo prosta – we współczesnych edytorach programistycznych numer każdej linii jest widoczny, więc wystarczy sprawdzić numer ostatniej, aby dowiedzieć się, ile linii liczy cały kod. Jednak czy taka miara jest rzeczywiście wiarygodna?`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Nie do końca. We wszystkich popularnych językach programowania można dodawać puste linie i białe znaki, które nie mają żadnego wpływu na działanie programu. Problem ten można częściowo rozwiązać, stosując formater kodu (lub linter, który wskaże zbędne fragmenty, a następnie można je usunąć ręcznie). Po sformatowaniu kodu można odczytać liczbę linii w sposób bardziej obiektywny.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Niestety i to rozwiązanie ma swoje ograniczenia. Styl programowania wciąż ma wpływ na wynik. Przykładowo w języku JavaScript można utworzyć wiele zmiennych w jednej instrukcji:`,
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`const a = 1, b = 2, c = 3;
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(`lub w wielu instrukcjach:`),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`const a = 1;
const b = 2;
const c = 3;
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Niektóre formatery potrafią rozbić deklaracje na osobne linie, ale problem pogłębia się w przypadku funkcji, które można zapisać na kilka sposobów:`,
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`function add(a, b) {
	return a + b;
}
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [new TextAtomBuilder(`lub`)]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`const add = (a, b) => a + b;
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Formatery zazwyczaj umieszczają wersję z nawiasami klamrowymi w trzech liniach, a wersję strzałkową – w jednej. Otrzymujemy więc różną liczbę linii dla kodów, które z punktu widzenia wykonania są równoważne.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Lintery mogą narzucić spójny standard stylu, co zwiększa wiarygodność liczby linii jako miary złożoności, ale nie rozwiązuje to całego problemu. Gdy kod staje się ustandaryzowany, pojawia się kwestia paradygmatu programowania.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Weźmy przykład w JavaScript i napiszmy algorytm sortowania przez wstawianie w stylu imperatywnym:`,
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`function insertionSortImperatively(numbers) {
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
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(`lub w stylu deklaratywnym:`),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`function insertionSortDeclaratively(numbers) {
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
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Obie wersje są stabilne, nie mutują tablicy wejściowej i mają tę samą złożoność obliczeniową O(n²). Obie zostały sformatowane tym samym formatterem i spełniają te same reguły lintera. Jednak kod deklaratywny jest krótszy – ma mniej linii i znaków.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Pokazuje to, że liczba linii kodu (ani liczba znaków) nie jest w pełni wiarygodną miarą złożoności programu. Rozwiązaniem może być ograniczenie dostępnych konstrukcji języka do minimalnego zestawu – tak, aby różne zapisy tego samego algorytmu były jak najbardziej zbliżone. Można to osiągnąć na dwa sposoby:`,
		),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			`wybierając język bardzo niskiego poziomu (np. jeden z asemblerów);`,
		),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			`wybierając język bardzo wysokiego poziomu, który minimalizuje konstrukcje imperatywne (np. Prolog);`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Drugie podejście jest ciekawsze – języki wysokiego poziomu są bardziej przystępne dla programisty, a i tak ostatecznie sprowadzają się do kodu niskopoziomowego.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Jednak nawet w Prologu można ten sam program zapisać na różne sposoby:`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new CodeAtomBuilder([
					new TextAtomBuilder(`rodzic(ania, bartek).
rodzic(ania, celina).
`),
				]),
			],
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new CodeAtomBuilder([
					new TextAtomBuilder(`rodzic(ania, bartek) :- true.
rodzic(ania, celina) :- true.
`),
				]),
			],
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new CodeAtomBuilder([
					new TextAtomBuilder(`rodzic(X, Y) :-
	X = ania,
	Y = bartek.

rodzic(X, Y) :-
	X = ania,
	Y = celina.
`),
				]),
			],
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Całkowita redukcja języka do minimalnego zestawu konstrukcji wydaje się zatem niemożliwa, jeśli zależy nam na czytelności.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Wyobraźmy sobie jednak język, który rezygnuje z następujących konstrukcji:`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Funkcje wieloparametrowe (multi-parameter functions):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Jeśli w języku dostępne są funkcje wyższego rzędu, każdą funkcję wieloparametrową można zapisać jako ciąg funkcji jednoargumentowych przy pomocy techniki currying;`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Bloki (blocks):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Blok kodu można zastąpić dodatkową funkcją, która zawiera logikę bloku i zwraca odpowiednie wartości;`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Destrukturyzacja (destructuring):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Można ją rozwinąć do pojedynczych przypisań do zmiennych;`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Wyrażenia złożone z pominiętymi nawiasami (compound expressions with skipped parentheses):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Można wstawić wszystkie brakujące nawiasy, wymuszając jawne grupowanie wyrażeń;`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Wyrażenia złożone (compound expressions):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Można rozbić każde wyrażenie na mniejsze fragmenty i przypisać je do osobnych zmiennych pomocniczych;`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Instrukcja return (return statement):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Można przyjąć konwencję, że wartością zwracaną przez funkcję jest wynik ostatniego wyrażenia w jej ciele, eliminując potrzebę jawnego słowa kluczowego;`,
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Definiowanie zmiennych poza nagłówkiem funkcji (defining variables outside the function header):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Można całkowicie zrezygnować z lokalnych definicji zmiennych poprzez wprowadzenie dodatkowych funkcji i przekazywanie wyników obliczeń bezpośrednio jako argumentów;`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Kod w takim języku byłby dłuższy i mniej czytelny, przypominając zapis rachunku lambda, ale za to stanowiłby wierniejszą miarę rzeczywistej złożoności kongnitywnej programu.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Innym aspektem, nad którym warto się zastanowić jest czytelność. Przykładowo, we większości współczesnych języków programowania funkcje mają zasadniczo następującą składnię: nazwa_funkcji(parametr1, parametr2, ...).`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Z punktu widzenia języka naturalnego jest to zapis nienaturalny. Spójrzmy na `,
		),
		new SourceAtomBuilder(
			`konkretny przykład z repozytorium JavaScriptowej biblioteki React`,
			new Source(
				"Meta",
				new Date(1759064545140),
				'Fragment kodu źródłowego biblioteki React z funkcją "transform"',
				"https://github.com/facebook/react/blob/cad813ac1ed5c04c6ccb390a3bdf5fedbbacaa45/scripts/print-warnings/print-warnings.js#L21",
			),
		),
		new TextAtomBuilder(":"),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(`function transform(file, enc, cb)`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`W języku naturalnym (angielskim) powiedzielibyśmy raczej: transform a file encoded with given encoding and then call a callback. Informację o tym, że jest to funkcja można pominąć, ponieważ wyraźnie widać, że zapis oznacza jakąś czynność (czasownik na początku zdania).`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Można by spróbować dostosować takie zapisy do realiów języka programowania traktując rzeczowniki jako parametry, a resztę słów zostawić jako części nazwy funkcji. Wtedy powyższy przykład mógłby wyglądać tak:`,
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[
			new CodeAtomBuilder([
				new TextAtomBuilder(
					`transform a (file) encoded with (encoding) and then call (callback)`,
				),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Taki sposób zapisu wydaje się bardzo naturalny i czytelny. Warto zbadać jak wyglądałyby całe kody źródłowe napisane w taki sposób.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Celem tej pracy jest stworzenie języka programowania o możliwie małej liczbie konstrukcji, zachowującego jednocześnie względną czytelność dzięki inspirowanemu językowi naturalnemu sposobowi zapisu funkcji.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Następnie oceniona zostanie przydatność i wygoda korzystania z takiego języka.`,
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
