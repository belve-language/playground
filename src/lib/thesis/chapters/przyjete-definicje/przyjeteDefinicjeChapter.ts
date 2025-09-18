import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import Code from "../../../pages/html/node/implementations/element/implementations/code/Code.svelte";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import H3 from "../../../pages/html/node/implementations/element/implementations/h3/H3.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import Pre from "../../../pages/html/node/implementations/element/implementations/pre/Pre.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
const abstraktyfikacjaChapter = [
	createElement(H3, {} as const, [
		createTextNode("Abstraktyfikacja (abstractifying)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces zamiany kodu źródłowego zapisanego jako drzewo składni konkretnej na kod źródłowy zapisany jako drzewo składni abstrakcyjnej. Proces ten nie jest w pełni odwracalny, ponieważ wiele drzew składni konkretnej może odpowiadać temu samemu drzewu składni abstrakcyjnej.",
		),
	]),
] as const satisfies Atom[];
const codebaseChapter = [
	createElement(H3, {} as const, [createTextNode("Codebase (codebase)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Zbiór plików z kodem źródłowym, które razem służą do zbudowania systemu informatycznego lub programu.",
		),
	]),
] as const satisfies Atom[];
const drzewoSkladniAbstrakcyjnejChapter = [
	createElement(H3, {} as const, [
		createTextNode("Drzewo składni abstrakcyjnej (abstract syntax tree)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Drzewiasta struktura danych reprezentująca kod źródłowy w sposób uproszczony – zawiera jedynie informacje istotne z punktu widzenia wykonania programu. Tworzona jest w wyniku abstraktyfikacji drzewa składni konkretnej. Nie można z niej wiernie odtworzyć pierwotnego kodu źródłowego, ponieważ różne reprezentacje konkretne mogą odpowiadać temu samemu drzewu składni abstrakcyjnej. Można jednak, przyjmując ustalone zasady konkretyfikacji, deterministycznie zbudować z niej kod źródłowy, który sprowadza się do tej samej reprezentacji abstrakcyjnej.",
		),
	]),
] as const satisfies Atom[];
const drzewoSkladniKonkretnejChapter = [
	createElement(H3, {} as const, [
		createTextNode("Drzewo składni konkretnej (concrete syntax tree)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Drzewiasta, rekurencyjna struktura danych wiernie odtwarzająca kod źródłowy. Powstaje podczas parsowania. Na jej podstawie można dokładnie odtworzyć kod, z którego została utworzona.",
		),
	]),
] as const satisfies Atom[];
const formaterChapter = [
	createElement(H3, {} as const, [createTextNode("Formater (formatter)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Program komputerowy, który przeprowadza formatowanie kodu.",
		),
	]),
];
const formatowanieChapter = [
	createElement(H3, {} as const, [createTextNode("Formatowanie (formatting)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces edycji kodu źródłowego w taki sposób, aby zachowując jego funkcjonalność, uczynić go bardziej czytelnym. Przeprowadzaniem go zajmuje się formater.",
		),
	]),
] as const satisfies Atom[];
const interpreterChapter = [
	createElement(H3, {} as const, [createTextNode("Interpreter (interpreter)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Program komputerowy, który bezpośrednio wykonuje kod źródłowy lub jego pośrednią reprezentację, zamiast tłumaczyć go najpierw na kod maszynowy.",
		),
	]),
] as const satisfies Atom[];
const kodZrodlowyChapter = [
	createElement(H3, {} as const, [
		createTextNode("Kod źródłowy (source code)"),
	]),
	createElement(P, {} as const, [
		createTextNode("Zapis programu komputerowego w języku programowania."),
	]),
] as const satisfies Atom[];
const linterChapter = [
	createElement(H3, {} as const, [createTextNode("Linter (linter)")]),
	createElement(P, {} as const, [
		createTextNode("Program komputerowy przeprowadzający lintowanie."),
	]),
];
const lintowanieChapter = [
	createElement(H3, {} as const, [createTextNode("Lintowanie (linting)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces analizy kodu źródłowego w celu wykrycia potencjalnych błędów oraz niezgodności z przyjętymi konwencjami i standardami. Przeprowadzaniem lintowania zajmuje się linter.",
		),
	]),
] as const satisfies Atom[];
const nieznanaChapter = [
	createElement(H3, {} as const, [createTextNode("Nieznana (unknown)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Zmienna zdefiniowana jako parametr funkcji, której wartość jest ustalana podczas wykonywania ciała funkcji i zwracana do miejsca wywołania po zakończeniu działania funkcji.",
		),
	]),
] as const satisfies Atom[];
const notacjaBackusaNauraChapter = [
	createElement(H3, {} as const, [
		createTextNode("Notacja Backusa-Naura (Backus-Naur form)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Formalny sposób zapisu gramatyk bezkontekstowych, składający się z nieterminali i terminali. Nieterminale mogą być rozwijane w inne symbole, a terminale stanowią atomowe elementy języka (np. słowa kluczowe, literały, znaki). Reguły produkcji mają postać:`,
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createTextNode(`<nieterminal> ::= symbol_1 | symbol_2 | ...`),
	]),
	createElement(P, {} as const, [
		createTextNode(`gdzie `),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("::="),
		]),
		createTextNode(', oznacza "może być rozwinięte w”, a '),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("|"),
		]),
		createTextNode(
			" wprowadza alternatywę wyboru. Symbol może być terminalem zapisywanym jako ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode('"terminal"'),
		]),
		createTextNode(" lub nieterminalem zapisywanym jako "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("<nieterminal>"),
		]),
		createTextNode("."),
	]),
	createElement(P, {} as const, [createTextNode(`Przykład:`)]),
	createElement(Pre, {display: "block", marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`<cyfra> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<liczba> ::= <cyfra> | <cyfra> <liczba>
<wyrażenie> ::= <liczba> "+" <liczba>
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Reguły te definiują proste wyrażenia arytmetyczne składające się z dwóch liczb i znaku dodawania.`,
		),
	]),
];
const parsowanieChapter = [
	createElement(H3, {} as const, [createTextNode("Parsowanie (parsing)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces przekształcania kodu źródłowego zapisanego jako łańcuch znaków w drzewo składni konkretnej. Przeprowadzaniem parsowania zajmuje się parser.",
		),
	]),
] as const satisfies Atom[];
const wykonanieKoduChapter = [
	createElement(H3, {} as const, [
		createTextNode("Wykonanie kodu (code execution)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces, w którym odczytywane i wykonywane są instrukcje zapisane w kodzie źródłowym.",
		),
	]),
] as const satisfies Atom[];
const zlozonoscPoznawczaKoduZrodlowegoChapter = [
	createElement(H3, {} as const, [
		createTextNode(
			"Złożoność poznawcza kodu źródłowego (cognitive complexity of source code)",
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Miara określająca, jak trudny do zrozumienia jest kod źródłowy programu z perspektywy programisty.",
		),
	]),
] as const satisfies Atom[];
const zmiennaChapter = [
	createElement(H3, {} as const, [createTextNode("Zmienna (variable)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Przypisanie wartości do łańcucha znaków będącego nazwą zmiennej.",
		),
	]),
] as const satisfies Atom[];
const znanaChapter = [
	createElement(H3, {} as const, [createTextNode("Znana (known)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Zmienna zdefiniowana jako parametr funkcji, której wartość jest znana w momencie rozpoczęcia wykonywania ciała funkcji.",
		),
	]),
] as const satisfies Atom[];
const przyjeteDefinicjeChapterSubchapters = [
	...abstraktyfikacjaChapter,
	...codebaseChapter,
	...drzewoSkladniAbstrakcyjnejChapter,
	...drzewoSkladniKonkretnejChapter,
	...formaterChapter,
	...formatowanieChapter,
	...interpreterChapter,
	...kodZrodlowyChapter,
	...linterChapter,
	...lintowanieChapter,
	...nieznanaChapter,
	...notacjaBackusaNauraChapter,
	...parsowanieChapter,
	...wykonanieKoduChapter,
	...zlozonoscPoznawczaKoduZrodlowegoChapter,
	...zmiennaChapter,
	...znanaChapter,
];
export const przyjeteDefinicjeChapter = [
	createElement(H2, {} as const, [createTextNode("Przyjęte definicje")]),
	createElement(P, {} as const, [
		createTextNode(
			"Poniżej znajduje się spis przyjętych w pracy definicji istotnych pojęć. W nawiasach podano ich odpowiedniki w języku angielskim.",
		),
	]),
	...przyjeteDefinicjeChapterSubchapters,
] as const satisfies readonly Atom[];
