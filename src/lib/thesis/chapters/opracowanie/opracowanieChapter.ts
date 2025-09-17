import {grammar} from "../../../instances/grammar/grammar.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import Br from "../../../pages/html/node/implementations/element/implementations/br/Br.svelte";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import H3 from "../../../pages/html/node/implementations/element/implementations/h3/H3.svelte";
import H4 from "../../../pages/html/node/implementations/element/implementations/h4/H4.svelte";
import Li from "../../../pages/html/node/implementations/element/implementations/li/Li.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import Pre from "../../../pages/html/node/implementations/element/implementations/pre/Pre.svelte";
import Strong from "../../../pages/html/node/implementations/element/implementations/strong/Strong.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
import {computeFittingTextLayoutInPreAdapted} from "../../computing-fitting-text-layout-in-pre-adapted/computeFittingTextLayoutInPreAdapted.ts";
export const opracowanieChapter = [
	createElement(H2, {} as const, [createTextNode("Opracowanie")]),
	createElement(H3, {} as const, [createTextNode("Paradygmat")]),
	createElement(P, {} as const, [
		createTextNode(
			"Na spektrum deklaratywności i imperatywności Belve należy umieścić po stronie deklaratywnej. Konkretniej mówiąc, jest to język logiczny.",
		),
	]),
	createElement(H3, {} as const, [createTextNode("Składnia")]),
	createElement(P, {} as const, [
		createTextNode(
			"Składnię języka można opisać, przechodząc od szczegółu do ogółu:",
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Znak biały (whitespace character):"),
		]),
		Br,
		createTextNode("Przykłady: spacja, tabulator, znak nowej linii;"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Znak operatora (operator character):"),
		]),
		Br,
		createTextNode("Są to: "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode(","),
		]),
		createTextNode(" (przecinek) i "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("."),
		]),
		createTextNode(" (kropka);"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Znak słowa (word character):"),
		]),
		Br,
		createTextNode(
			"Litery (małe i wielkie), cyfry oraz znaki pomocnicze takie jak ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("@"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("#"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("^"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("+"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("-"),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Znak segmentu nazwy zmiennej (variable name segment character):",
			),
		]),
		Br,
		createTextNode("Znak operatora lub znak słowa;"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Znaki białe (whitespace characters):"),
		]),
		Br,
		createTextNode(
			"Łańcuch składający się z co najmniej jednego znaku białego;",
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Słowo (word):")]),
		Br,
		createTextNode("Łańcuch składający się z co najmniej jednego znaku słowa;"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Operator (operator):"),
		]),
		Br,
		createTextNode("Znak operatora. Wyróżnia się dwa rodzaje operatorów:"),
		createElement(Li, {marginBlock: "none"} as const, [
			createElement(Strong, {} as const, [
				createTextNode('Operator "następnie" ("then" operator):'),
			]),
			Br,
			createTextNode("Reprezentowany poprzez przecinek;"),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createElement(Strong, {} as const, [
				createTextNode('Operator "lub" ("or" operator):'),
			]),
			Br,
			createTextNode("Reprezentowany poprzez kropkę;"),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment nazwy zmiennej (variable name segment):"),
		]),
		Br,
		createTextNode("Łańcuch co najmniej jednego znaku nazwy zmiennej;"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Nazwa zmiennej (variable name):"),
		]),
		Br,
		createTextNode(
			"Łańcuch co najmniej jednego segmentu nazwy zmiennej. Segmenty oddzielone są znakami białymi. Przykładowo: ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("dividend"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("123.456"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("maximal divisor to check"),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Segment słowa wywołania funkcji (word function call segment):",
			),
		]),
		Br,
		createTextNode("Słowo. Przykładowo: "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("prime"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("="),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Segment znanej wywołania funkcji (known function call segment):",
			),
		]),
		Br,
		createTextNode("Nawias okrągły zawierający nazwę zmiennej. Przykładowo: "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(dividend)"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(maximal divisor to check)"),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Segment nieznanej wywołania funkcji (unknown function call segment):",
			),
		]),
		Br,
		createTextNode(
			"Nawias kwadratowy zawierający nazwę zmiennej. Przykładowo: ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("[remainder]"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("[result]"),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Segment słowa nagłówka funkcji (word function header segment):",
			),
		]),
		Br,
		createTextNode("Słowo. Przykładowo: "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("prime"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("="),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Segment znanej nagłówka funkcji (known function header segment):",
			),
		]),
		Br,
		createTextNode("Nawias okrągły zawierający nazwę zmiennej. Przykładowo: "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(dividend)"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(maximal divisor to check)"),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode(
				"Segment nieznanej nagłówka funkcji (unknown function header segment):",
			),
		]),
		Br,
		createTextNode(
			"Nawias kwadratowy zawierający nazwę zmiennej. Przykładowo: ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("[remainder]"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("[result]"),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment wywołania funkcji (function call segment):"),
		]),
		Br,
		createTextNode("Jest to jeden z:"),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode(
				"Segment słowa wywołania funkcji (word function call segment);",
			),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode(
				"Segment znanej wywołania funkcji (known function call segment);",
			),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode(
				"Segment nieznanej wywołania funkcji (unknown function call segment);",
			),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment nagłówka funkcji (function header segment):"),
		]),
		Br,
		createTextNode("Jest to jeden z:"),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode(
				"Segment słowa nagłówka funkcji (word function header segment);",
			),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode(
				"Segment znanej nagłówka funkcji (known function header segment);",
			),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode(
				"Segment nieznanej nagłówka funkcji (unknown function header segment);",
			),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Wywołanie funkcji (function call):"),
		]),
		Br,
		createTextNode(
			"Łańcuch co najmniej jednego segmentu wywołania funkcji. Segmenty te są oddzielone znakami białymi. Znaki białe można pominąć, o ile nie łączą różnych segmentów słowa. Przykładowo: ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(dividend) % (divisor) = [remainder]"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(dividend)%(divisor)=[remainder]"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode(
				"none of integers between (2) and (max divisor to check) divide (number)",
			),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Nagłówek funkcji (function header):"),
		]),
		Br,
		createTextNode(
			"Łańcuch co najmniej jednego segmentu nagłówka funkcji. Segmenty te są oddzielone znakami białymi. Znaki białe można pominąć, o ile nie łączą różnych segmentów słowa. Przykładowo: ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(dividend) % (divisor) = [remainder]"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode("(dividend)%(divisor)=[remainder]"),
		]),
		createTextNode(", "),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode(
				"none of integers between (2) and (max divisor to check) divide (number)",
			),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Instrukcja (instruction):"),
		]),
		Br,
		createTextNode("Jest to jedna z:"),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode("Wywołanie funkcji (function call);"),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode("Blok (block);"),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Instrukcje (instructions):"),
		]),
		Br,
		createTextNode(
			"Łańcuch co najmniej jednej instrukcji, rozdzielonych operatorami. Przykładowo: ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode(
				"(number) > (1), (number) ^ (0.5) = [max divisor to check]",
			),
		]),
		createTextNode(";"),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Blok (block):")]),
		Br,
		createTextNode("Instrukcje ujęte w nawiasy klamrowe. Przykładowo: "),
		createElement(Pre, {display: "block", marginBlock: "none"} as const, [
			createTextNode(`{
    (number) > (1),
    (number) ^ (0.5) = [max divisor to check],
    none of integers between (2) and (max divisor to check) divide (number)
}`),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Funkcja (function):")]),
		Br,
		createTextNode(
			"Opcjonalny nagłówek funkcji oraz wymagane ciało funkcji (blok). Przykładowo:",
		),
		createElement(Pre, {display: "block", marginBlock: "none"} as const, [
			createTextNode(`(dividend) % (divisor) = [remainder] {
    (number) > (1),
    (number) ^ (0.5) = [max divisor to check],
    none of integers between (2) and (max divisor to check) divide (number)
}`),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Kod źródłowy (source code):"),
		]),
		Br,
		createTextNode("Łańcuch funkcji, który może być pusty;"),
	]),
	createElement(H4, {} as const, [createTextNode("Gramatyka")]),
	createElement(P, {} as const, [
		createTextNode(
			"Gramatyka została przygotowana tak, aby mogła zostać sparsowana przez parser LL(1). Wymagało to w niektórych miejscach zdefiniowania reguł w sposób nieintuicyjny.",
		),
		Br,
		createTextNode(
			"Na przykład można byłoby się spodziewać, że reguła opisująca funkcję będzie wyglądała następująco:",
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "start"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<funkcja> ::=",
				"<opcjonalny oddzielony nagłówek funkcji>",
				"<ciało funkcji>",
			]),
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "none"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<opcjonalny oddzielony nagłówek funkcji> ::=",
				"<nic>",
				"|",
				"<oddzielony nagłówek funkcji>",
			]),
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "none"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<oddzielony nagłówek funkcji> ::=",
				"<nagłówek funkcji>",
				"<opcjonalne znaki białe>",
			]),
		),
	]),
	createElement(Pre, {display: "block", marginBlock: "end"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<opcjonalne znaki białe> ::=",
				"<nic>",
				"|",
				"<znaki białe>",
			]),
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Taki zbiór reguł nie byłby jednak zgodny z wymaganiami parsera LL(1), ponieważ znaki białe byłyby używane zarówno do oddzielania segmentów nagłówka funkcji, jak i do oddzielania nagłówka funkcji od ciała funkcji.",
		),
		Br,
		createTextNode(
			"Parser, napotykając znak biały, musiałby rozważyć dwie ścieżki parsowania. Parsery LL(1) wymagają jednak, aby każdy symbol wejściowy prowadził tylko do jednej możliwej ścieżki parsowania.",
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Problem ten i inne podobne rozwiązano poprzez potraktowanie segmentów nagłówka funkcji jako posiadających opcjonalne znaki białe na końcu każdego z nich.",
		),
		Br,
		createTextNode(
			"Znaki białe występujące po ostatnim segmencie nagłówka funkcji są wówczas interpretowane jako oddzielające nagłówek od ciała funkcji.",
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Poniżej znajduje się kompletna gramatyka zapisana w notacji Backusa-Naura. Regułą początkową jest ",
		),
		createElement(Pre, {display: "inline", marginBlock: "none"} as const, [
			createTextNode(`<${grammar.startingRule.name}>`),
		]),
		createTextNode("."),
	]),
	...Object.values(grammar.ruleById).map((rule, index) => {
		return createElement(
			Pre,
			{
				display: "block",
				marginBlock:
					index === 0 ? "start"
					: index === Object.values(grammar.ruleById).length - 1 ? "end"
					: "none",
			} as const,
			[
				createTextNode(
					computeFittingTextLayoutInPreAdapted(
						rule.stringifyToBackusNaurForm(grammar.ruleById),
					),
				),
			],
		);
	}),
	createElement(H3, {} as const, [createTextNode("Semantyka")]),
	createElement(H3, {} as const, [createTextNode("Model obliczeniowy")]),
];
