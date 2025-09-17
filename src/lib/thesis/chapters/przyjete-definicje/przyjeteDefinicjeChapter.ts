import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
const abstraktyfikacjaChapter = [
	createElement(H2, [createTextNode("Abstraktyfikacja (abstractifying)")]),
	createElement(P, [
		createTextNode(
			"Proces zamiany kodu źródłowego zapisanego jako drzewi składni konkretnej na kod źródłowy zapisany jako drzewo składni abstrakcyjnej. Nie jest on w pełni odwracalny, ponieważ wiele drzew składni konkretnej może sprowadzać się do tego samego drzewa składni abstrakcyjnej.",
		),
	]),
];
const codebaseChapter = [
	createElement(H2, [createTextNode("Codebase")]),
	createElement(P, [
		createTextNode(
			"Zbiór plików z kodem źródłowym, które razem są używane do zbudowania systemu informatycznego programu.",
		),
	]),
];
const drzewoSkladniAbstrakcyjnejChapter = [
	createElement(H2, [createTextNode("Drzewo składni abstrakcyjnej")]),
	createElement(P, [
		createTextNode(
			"Drzewiasta struktura danych reprezentująca kod źródłowy, która zawiera tylko dane istotne z punktu widzenia jego wykonania. Jest ona zbudowana w wyniki abstraktyfikacji z drzewa składni konkretnej. Nie można z niej wiernie odtworzyć kodu źródłowego, z którego została zbudowana, ponieważ nieskończenie wiele kodów źródłowych może sprowadzać się do tego samego drzewa składni abstrakcyjnej. Można jednak zbudować deterministycznie z niej kod źródłowy, który się do niej sprowadza przyjmując pewne zasady konkretyfikacji.",
		),
	]),
];
const drzewoSkladniKonkretnejChapter = [
	createElement(H2, [createTextNode("Drzewo składni konkretnej")]),
	createElement(P, [
		createTextNode(
			"Drzewiasta i rekurencyjna struktura danych, która wiernie odtwarza kod źródłowy, z którego została zbudowana podczas parsingu. Można z niej wiernie odtworzyć kod źródłowy, z którego została zbudowana.",
		),
	]),
];
const lintingChapter = [
	createElement(H2, [createTextNode("Linting")]),
	createElement(P, [
		createTextNode(
			"Proces sprawdzania kodu źródłowego pod kątem potencjalnych błędów i niezgodności ze standardami kodowania. Przeprowadzaniem lintingu zajmuje się linter.",
		),
	]),
];
const nieznanaChapter = [
	createElement(H2, [createTextNode("Nieznana (unknown)")]),
	createElement(P, [
		createTextNode(
			"Zmienna zdefiniowana jako parametr funkcji. Jej wartość jest ustalana podczas wykonywania ciała funkcji, a po zakończeniu wykonania ciała funkcji jest przekazywana do wywołującego funkcję.",
		),
	]),
];
const parsingChapter = [
	createElement(H2, [createTextNode("Parsing")]),
	createElement(P, [
		createTextNode(
			"Proces zamiany kodu źródłowego zapisanego jako łańcuch znaków na drzewo składni konkretnej. Przeprowadzaniem parsingu zajmuje się parser. Ze zbudowanej struktury można odtworzyć dokładnie ten sam kod źródłowy, z którego została zbudowana.",
		),
	]),
];
const zmiennaChapter = [
	createElement(H2, [createTextNode("Zmienna")]),
	createElement(P, [
		createTextNode(
			"Przypisanie wartości do łańcucha znaków będącego nazwą zmiennej. Mimo swojej nazwy, nie jest możliwa zmiana przypisanej wartości.",
		),
	]),
];
const znanaChapter = [
	createElement(H2, [createTextNode("Znana (known)")]),
	createElement(P, [
		createTextNode(
			"Zmienna zdefiniowana jako parametr funkcji. Jej wartość jest podana przez wywołującego funkcję i jest znana od początku wykonania ciała funkcji.",
		),
	]),
];
const przyjeteDefinicjeChapterSubchapters = [
	...abstraktyfikacjaChapter,
	...codebaseChapter,
	...drzewoSkladniAbstrakcyjnejChapter,
	...drzewoSkladniKonkretnejChapter,
	...lintingChapter,
	...nieznanaChapter,
	...parsingChapter,
	...zmiennaChapter,
	...znanaChapter,
];
export const przyjeteDefinicjeChapter = [
	createElement(H2, [createTextNode("Przyjęte definicje")]),
	createElement(P, [
		createTextNode(
			"Oto spis przyjętych w pracy definicji istotnych pojęć. W nawiasach zostały podane również ich odpowiedniki w języku angielskim.",
		),
	]),
	...przyjeteDefinicjeChapterSubchapters,
] as const satisfies readonly Atom[];
