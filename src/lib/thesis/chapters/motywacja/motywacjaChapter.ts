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
import {ArticleSource, InternetSource} from "../../../pages/source/Source.ts";
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
			`Jest to miara wyjątkowo prosta – we współczesnych edytorach programistycznych numer każdej linii jest widoczny, więc wystarczy sprawdzić numer ostatniej, aby dowiedzieć się, z ilu linii składa się cały kod. Jednak czy taka miara jest rzeczywiście wiarygodna?`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Nie do końca. We wszystkich popularnych językach programowania można dodawać puste linie i białe znaki, które nie mają żadnego wpływu na działanie programu. Problem ten można częściowo rozwiązać, stosując formater kodu. Po sformatowaniu kodu można odczytać liczbę linii w sposób bardziej obiektywny.`,
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
			`Niektóre formatery potrafią rozbić deklaracje na osobne linie, ale problem pogłębia się w przypadku funkcji, które można w tym języku zapisać na kilka sposobów:`,
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
			`Lintery mogą narzucić spójny standard stylu, co zwiększa wiarygodność liczby linii jako miary złożoności`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Na tym etapie kod jest już względnie ustandaryzowany. Można badać go posługując się ",
		),
		new SourceAtomBuilder(
			"znanymi metodami pomiaru złożoności kodu źródłowego",
			new InternetSource(
				"Wikipedia",
				new Date(1759086734814),
				"Programming complexity – Measures",
				"https://en.wikipedia.org/wiki/Programming_complexity#Measures",
			),
		),
		new TextAtomBuilder(", ale pojawia się kwestia paradygmatu programowania."),
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
		new TextAtomBuilder(`i w stylu deklaratywnym:`),
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
			`Obie wersje są stabilne, zwracają nową tablicę nie modyfikując otrzymanej i mają tę samą złożoność obliczeniową O(n²). Obie zostały sformatowane tym samym formaterem i spełniają te same reguły lintera. Jednak kod deklaratywny jest krótszy – ma mniej linii i znaków.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Pokazuje to, że liczba linii kodu (ani liczba znaków) nie jest w pełni wiarygodną miarą złożoności programu.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Można też ustalić złożoności tych kodów przy pomocy znanych miar złożoności. Przykładowo obliczyć można ich `,
		),
		new SourceAtomBuilder(
			"złożoność cyklomatyczną",
			new ArticleSource(
				"Thomas J. McCabe",
				new Date("1976-12"),
				"4",
				"IEE Transactions on Software Engineering",
				"308-320",
				"A Complexity Measure",
				"SE-2",
			),
		),
		new TextAtomBuilder(`. Pomocne będzie tu `),
		new SourceAtomBuilder(
			"narzędzie JSHint",
			new InternetSource(
				"Społeczność narzędzia JSHint",
				new Date(1759087644148),
				"Strona internetowa narzędzia JSHint",
				"https://jshint.com",
			),
		),
		new TextAtomBuilder(
			`, które oblicza tę miarę dla kodu dla języka JavaScript. Okazuje się, że kod imperatywny ma 1 funkcję, której złożoność cyklomatyczna wynosi 4, a kod deklaratywny ma 4 funkcje, z których każda ma złożoność cyklomatyczną wynoszącą 1. Na tej podstawie nie można jednoznacznie stwierdzić, który kod jest bardziej złożony, bo trzeba najpierw zdecydować jak istotny jest wpływ liczby funkcji na złożoność całości.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Rozwiązaniem powyższych problemów może być ograniczenie dostępnych konstrukcji języka do minimalnego zestawu w taki sposób, aby różne zapisy tego samego algorytmu były jak najbardziej do siebie podobne. Można to osiągnąć na dwa sposoby:`,
		),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			`wybierając język bardzo niskiego poziomu (przykładowo jeden z asemblerów);`,
		),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			`wybierając język bardzo wysokiego poziomu, który minimalizuje konstrukcje imperatywne (przykładowo Prolog);`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Drugie podejście jest ciekawsze – języki wysokiego poziomu są bardziej przystępne dla programisty, a i tak ostatecznie sprowadzają się do kodu niskiego poziomu.`,
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
			`Jeśli w języku dostępne są funkcje wyższego rzędu, każdą funkcję wieloparametrową można zapisać jako ciąg funkcji jednoargumentowych przy pomocy techniki `,
		),
		new SourceAtomBuilder(
			`rozwijania funkcji`,
			new InternetSource(
				"HaskellWiki",
				new Date(1759090150106),
				"Currying",
				"https://wiki.haskell.org/index.php?title=Currying",
			),
		),
		new TextAtomBuilder(`;`),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Bloki (blocks):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Blok można zastąpić dodatkową funkcją, która zawiera logikę bloku i zwraca odpowiednie wartości;`,
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
			new TextAtomBuilder('Instrukcja "return" ("return" statement):'),
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
			`Kod źródłowy w takim języku byłby dłuższy i mniej czytelny, przypominając zapis rachunku lambda, ale za to stanowiłby wierniejszą miarę rzeczywistej złożoności poznawczej programu.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Warto zastanowić się więc nad tym, czy da w jakiś sposób poprawić czytelność kodu nie wprowadzających nadmiarowych konstrukcji do języka. Na pewno język powinien posiadać konstrukcję funkcji. Zobaczmy, jak wygląda ich zapis we współczesnych popularnych językach programowania. Zasadniczo ich zapis ma następującą składnię: nazwa_funkcji(parametr₁, parametr₂, ...).`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Z punktu widzenia języka naturalnego jest to zapis nienaturalny. Spójrzmy na `,
		),
		new SourceAtomBuilder(
			`konkretny przykład z repozytorium biblioteki React do języka JavaScript`,
			new InternetSource(
				"Meta i społeczność biblioteki React",
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
			`W języku naturalnym (angielskim) powiedzielibyśmy raczej: transform a file encoded with given encoding and then call a callback.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Można by spróbować dostosować takie zapisy do realiów języka programowania. Informację o tym, że jest to funkcja można pominąć, ponieważ wyraźnie widać, że zapis oznacza jakąś czynność (czasownik na początku zdania). Następnie potraktujmy rzeczowniki jako parametry, a resztę słów zostawmy jako części nazwy funkcji. Wtedy powyższy przykład mógłby wyglądać tak:`,
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
			`Zastanowić można się też nad tym, jak współczesne języki programowania radzą sobie ze zwracaniem wartości z funkcji.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Okazuje się, że w większości języków programowania podstawowy mechanizm jest następujący: dostępna jest instrukcja "return" przerywająca wykonywanie kodu źródłowego funkcji i zwracająca wartość lub przyjmuje się traktowanie wartości ostatniego wyrażenia jako wartości zwracanej.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Niektóre języki programowania oferują ciekawy mechanizm umożliwiający zwracanie dodatkowych wartości poprzez parametry wyjściowe. Przykładowo w języku C# można napisać:`,
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
				new TextAtomBuilder(`void Divide(int dividend, int divisor, out int result) {
	result = dividend / divisor;
}
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Funkcja ta nie zwraca żadnej wartości w standardowy sposób (ma typ `,
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new CodeAtomBuilder([new TextAtomBuilder(`void`)])],
		),
		new TextAtomBuilder(
			`), ale realizuje zwracanie poprzez parametr wyjściowy. Nie ma tu potrzeby używania instrukcji "return". Funkcję wywołuje się następująco:`,
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
				new TextAtomBuilder(`Divide(10, 2, out int output);
`),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(`Po wywołaniu funkcji zmienna `),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new CodeAtomBuilder([new TextAtomBuilder(`output`)])],
		),
		new TextAtomBuilder(
			` będzie przechowywać obliczoną wartość. Oczywiście można też używać instrukcji "return" (nawet niezależnie). To programista decyduje, których z tych mechanizmów użyje. Łatwo wyobrazić sobie jakie zamieszanie może wyniknąć z używania obu tych sposobów jednocześnie w zbyt wielu funkcjach i przeplataniu parametrów wyjściowych ze zwykłymi (wejściowymi).`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Opisany powyżej potencjalny problem z czytelnością można spróbować rozwiązać decydując się na całkowitą rezygnację z instrukcji "return" i zamiast nich stosować tylko parametry wyjściowe. Kluczowa jest tu też integracja tego pomysłu z omówionym wcześniej naturalnym sposobem zapisu funkcji. Powinno to zagwarantować możliwie największą czytelność. Przykładowo funkcję dzielenia całkowitego z resztą można by zapisać tak:`,
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
					`(dividend) / (divisor) = [quotient] and [remainder]`,
				),
			]),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Mimo że parametrów są tu 4, to przeplatanie ich ze słowami i symbolami sprawia, że zapis jest czytelny i zrozumiały.`,
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
