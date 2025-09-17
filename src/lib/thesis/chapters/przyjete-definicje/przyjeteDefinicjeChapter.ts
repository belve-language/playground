import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
const abstraktyfikacjaChapter = [
	createElement(H2, {} as const, [
		createTextNode("Abstraktyfikacja (abstractifying)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces zamiany kodu źródłowego zapisanego jako drzewi składni konkretnej na kod źródłowy zapisany jako drzewo składni abstrakcyjnej. Nie jest on w pełni odwracalny, ponieważ wiele drzew składni konkretnej może sprowadzać się do tego samego drzewa składni abstrakcyjnej.",
		),
	]),
] as const satisfies Atom[];
const codebaseChapter = [
	createElement(H2, {} as const, [createTextNode("Codebase")]),
	createElement(P, {} as const, [
		createTextNode(
			"Zbiór plików z kodem źródłowym, które razem są używane do zbudowania systemu informatycznego programu.",
		),
	]),
] as const satisfies Atom[];
const drzewoSkladniAbstrakcyjnejChapter = [
	createElement(H2, {} as const, [
		createTextNode("Drzewo składni abstrakcyjnej"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Drzewiasta struktura danych reprezentująca kod źródłowy, która zawiera tylko dane istotne z punktu widzenia jego wykonania. Jest ona zbudowana w wyniki abstraktyfikacji z drzewa składni konkretnej. Nie można z niej wiernie odtworzyć kodu źródłowego, z którego została zbudowana, ponieważ nieskończenie wiele kodów źródłowych może sprowadzać się do tego samego drzewa składni abstrakcyjnej. Można jednak zbudować deterministycznie z niej kod źródłowy, który się do niej sprowadza przyjmując pewne zasady konkretyfikacji.",
		),
	]),
] as const satisfies Atom[];
const drzewoSkladniKonkretnejChapter = [
	createElement(H2, {} as const, [createTextNode("Drzewo składni konkretnej")]),
	createElement(P, {} as const, [
		createTextNode(
			"Drzewiasta i rekurencyjna struktura danych, która wiernie odtwarza kod źródłowy, z którego została zbudowana podczas parsowania. Można z niej wiernie odtworzyć kod źródłowy, z którego została zbudowana.",
		),
	]),
] as const satisfies Atom[];
const formaterChapter = [
	createElement(H2, {} as const, [createTextNode("Formater (formatter)")]),
	createElement(P, {} as const, [
		createTextNode("Program komputerowy, który przeprowadza formatowanie."),
	]),
];
const formatowanieChapter = [
	createElement(H2, {} as const, [createTextNode("Formatowanie (formatting)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces edycji kodu źródłowego, w taki sposób, żeby kod po edycji miał identyczne właściwości funkcjonalne, ale był bardziej czytelny. Przeprowadzaniem formatowania zajmuje się formater.",
		),
	]),
] as const satisfies Atom[];
const kodZrodlowyChapter = [
	createElement(H2, {} as const, [
		createTextNode("Kod źródłowy (source code)"),
	]),
	createElement(P, {} as const, [
		createTextNode("Zapis programu komputerowego w języku programowania."),
	]),
] as const satisfies Atom[];
const linterChapter = [
	createElement(H2, {} as const, [createTextNode("Linter (linter)")]),
	createElement(P, {} as const, [
		createTextNode("Program komputerowy, przeprowadza linting."),
	]),
];
const lintingChapter = [
	createElement(H2, {} as const, [createTextNode("Linting (linting)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces sprawdzania kodu źródłowego pod kątem potencjalnych błędów i niezgodności z przyjętymi konwencjami i standardami. Przeprowadzaniem lintingu zajmuje się linter.",
		),
	]),
] as const satisfies Atom[];
const nieznanaChapter = [
	createElement(H2, {} as const, [createTextNode("Nieznana (unknown)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Zmienna zdefiniowana jako parametr funkcji. Jej wartość jest ustalana podczas wykonywania ciała funkcji, a po zakończeniu wykonania ciała funkcji jest przekazywana do wywołującego funkcję.",
		),
	]),
] as const satisfies Atom[];
const parsowanieChapter = [
	createElement(H2, {} as const, [createTextNode("Parsowanie (parsing)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces zamiany kodu źródłowego zapisanego jako łańcuch znaków na drzewo składni konkretnej. Przeprowadzaniem parsowania zajmuje się parser. Ze zbudowanej struktury można odtworzyć dokładnie ten sam kod źródłowy, z którego została zbudowana.",
		),
	]),
] as const satisfies Atom[];
const wykonanieKoduChapter = [
	createElement(H2, {} as const, [
		createTextNode("Wykonanie kodu (code execution)"),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Proces podczas którego komputer wykonuje instrukcje zapisane w kodzie źródłowym programu. Oznacza to wczytanie ich i wykonanie odpowiadających ich działań.",
		),
	]),
] as const satisfies Atom[];
const zlozonoscPoznawczaKoduZrodlowegoChapter = [
	createElement(H2, {} as const, [
		createTextNode(
			"Złożoność poznawcza kodu źródłowego (cognitive complexity of source code)",
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Miara określająca, jak trudny jest do zrozumienia dla programisty kod źródłowy programu.",
		),
	]),
] as const satisfies Atom[];
const zmiennaChapter = [
	createElement(H2, {} as const, [createTextNode("Zmienna (variable)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Przypisanie wartości do łańcucha znaków będącego nazwą zmiennej. Mimo swojej nazwy, nie jest możliwa zmiana przypisanej wartości.",
		),
	]),
] as const satisfies Atom[];
const znanaChapter = [
	createElement(H2, {} as const, [createTextNode("Znana (known)")]),
	createElement(P, {} as const, [
		createTextNode(
			"Zmienna zdefiniowana jako parametr funkcji. Jej wartość jest podana przez wywołującego funkcję i jest znana od początku wykonania ciała funkcji.",
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
	...kodZrodlowyChapter,
	...linterChapter,
	...lintingChapter,
	...nieznanaChapter,
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
			"Oto spis przyjętych w pracy definicji istotnych pojęć. W nawiasach zostały podane również ich odpowiedniki w języku angielskim.",
		),
	]),
	...przyjeteDefinicjeChapterSubchapters,
] as const satisfies readonly Atom[];
