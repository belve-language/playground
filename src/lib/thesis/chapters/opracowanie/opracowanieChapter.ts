import {ruleById} from "../../../instances/rule-by-id/ruleById.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import Br from "../../../pages/html/node/implementations/element/implementations/br/Br.svelte";
import Code from "../../../pages/html/node/implementations/element/implementations/code/Code.svelte";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import H3 from "../../../pages/html/node/implementations/element/implementations/h3/H3.svelte";
import H4 from "../../../pages/html/node/implementations/element/implementations/h4/H4.svelte";
import Li from "../../../pages/html/node/implementations/element/implementations/li/Li.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import Pre from "../../../pages/html/node/implementations/element/implementations/pre/Pre.svelte";
import Strong from "../../../pages/html/node/implementations/element/implementations/strong/Strong.svelte";
import WithMarginBlockEmptyDiv from "../../../pages/html/node/implementations/element/implementations/with-margin-block-empty-div/WithMarginBlockEmptyDiv.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
import {computeFittingTextLayoutInPreAdapted} from "../../computing-fitting-text-layout-in-pre-adapted/computeFittingTextLayoutInPreAdapted.ts";
export const opracowanieChapter = [
	createElement(H2, {} as const, [createTextNode("Opracowanie")]),
	createElement(H3, {} as const, [createTextNode("Paradygmat")]),
	createElement(P, {} as const, [
		createTextNode(
			"Na spektrum deklaratywności i imperatywności Belve należy umieścić przy deklaratywnym końcu. Konkretniej mówiąc, jest to język logiczny.",
		),
	]),
	createElement(H3, {} as const, [createTextNode("Składnia")]),
	createElement(P, {} as const, [
		createTextNode("Składnię języka opisać można idąc od szczegółu do ogółu:"),
	]),
	/*
		Składnię języka opisać można idąć od szczegółu do ogółu:

- znak biały:
  `"\t"` (tabulator),
  `"\n"` (nowa linia),
  `" "` (spacja),
- znak operatora:
  `","`, `"."`
- znak słowa:
  litera (mała lub wielka), cyfra i znaki pomocnicze takie jak @ # ^ + -
- znak nazwy zmiennej: znak operatora lub znak słowa
- znaki białe - łańcuch znaków białych
- słowo - łańcuch znaków słowa
- operator - znak operatora. wyróżnam 2 rodzaje w zależności od użytego znaku
  - "." -> operator "następnie" (ang. "then")
  - "," -> operator "lub" (ang. "or")
- nazwa zmiennej - łańcuch znaków nazwy zmiennej
- segment słowa wywołania funkcji - słowo
- segment znanej wywołania funkcji - "(" nazwa zmiennej ")"
- segment nieznanej wywołania funkcji - "[" nazwa zmiennej "]"
- segment wywołania funkcji - jeden z:
  - segment słowa wywołania funkcji. przykładowo `prime` `=`
  - segment znanej wywołania funkcji. przykładowo `(dividend)`
  - segment nieznanej wywołania funkcji. przykładowo `[remainder]`
- segmenty wywołania funkcji - łańcuch segmentów wywołania funkcji. przykładowo `(dividend) % (divisor)`
- wywołanie funkcji: segmenty wywołania funkcji. przykładowo `(dividend) % (divisor) = [remainder]`
- instrukcja - jeden z:
  - wywołanie funkcji
  - blok
- instrukcje - łańcuch co najmniej jednej instrukcji, instrukcje przedzielone są operatorami. przykładowo: `	(number) > (1),
(number) ^ (0.5) = [maximaldivisortocheck],
none of the integers between (2) and (maximaldivisortocheck) divide (number)`
- blok - "{" instrukcje "}". przykładowo `{
	(number) > (1),
	(number) ^ (0.5) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number)
}`
- ciało funkcji - blok
- segment słowa nagłówka funkcji - słowo
- segment znanej nagłówka funkcji - "(" nazwa zmiennej ")"
- segment nieznanej nagłówka funkcji - "[" nazwa zmiennej "]"
- segment nagłówka funkcji - jeden z:
  - segment słowa nagłówka funkcji. przykładowo `prime` `=`
  - segment znanej nagłówka funkcji. przykładowo `(dividend)`
  - segment nieznanej nagłówka funkcji. przykładowo `[remainder]`
- segmenty nagłówka funkcji - łańcuch segmentów nagłówka funkcji. przykładowo `(dividend) % (divisor)`
- nagłówek funkcji - segmenty nagłówka funkcji. przykładowo `(dividend)
% (divisor) = [remainder]`
- funkcja - opcjonalny nagłówek funkcji, wymagane ciało funkcji. przykładowo:
  `(dividend) % (divisor) = [remainder] {
	(number) > (1),
	(number) ^ (0.5) = [maximaldivisortocheck],
	none of the integers between (2) and (maximaldivisortocheck) divide (number)
}`
- zawartość (kodu) - łańcuch funkcji. może być pusty

DOPISAĆ DO UŻYWANYCH POJĘĆ, ŻE ZE ZMIENNĄ CHODZI O TO, ŻE PRZY URUCHOMIENIACH PROGRAMU MOŻE TO BYĆ COŚ INNEGO, A NIE OTO, ZE JEST NIEMUTOWALNA
*/
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Znak biały:")]),
		Br,
		createTextNode("Po angielsku: whitespace character"),
		Br,
		createTextNode("Przykłady: spacja, tabulator, znak nowej linii."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Znak operatora:")]),
		Br,
		createTextNode("Po angielsku: operator character"),
		Br,
		createTextNode("Są to: "),
		createElement(Code, {} as const, [createTextNode(",")]),
		createTextNode(" (przecinek) i "),
		createElement(Code, {} as const, [createTextNode(".")]),
		createTextNode(" (kropka)."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Znak słowa:")]),
		Br,
		createTextNode("Po angielsku: word character"),
		Br,
		createTextNode(
			"Są to litery (małe i wielkie), cyfry oraz znaki pomocnicze takie jak ",
		),
		createElement(Code, {} as const, [createTextNode("@")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("#")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("^")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("+")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("-")]),
		createTextNode("."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Znak nazwy zmiennej:"),
		]),
		Br,
		createTextNode("Po angielsku: variable name character"),
		Br,
		createTextNode("Jest to znak operatora lub znak słowa."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Znaki białe:")]),
		Br,
		createTextNode("Po angielsku: whitespace characters"),
		Br,
		createTextNode("Jest to łańcuch co najmniej jednego znaku białego."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Słowo:")]),
		Br,
		createTextNode("Po angielsku: word"),
		Br,
		createTextNode("Jest to łańcuch co najmniej jednego znaku słowa."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Operator:")]),
		Br,
		createTextNode("Po angielsku: operator"),
		Br,
		createTextNode(
			"Jest to znak operatora. Wyróżnione są dwa rodzaje operatorów:",
		),
		createElement(Li, {marginBlock: "none"} as const, [
			createElement(Strong, {} as const, [
				createTextNode('Operator "następnie":'),
			]),
			Br,
			createTextNode('Po angielsku: "then" operator'),
			Br,
			createTextNode("Jest on reprezentowany poprzez przecinek."),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createElement(Strong, {} as const, [createTextNode('Operator "lub":')]),
			Br,
			createTextNode('Po angielsku: "or" operator'),
			Br,
			createTextNode("Jest on reprezentowany poprzez kropkę."),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment nazwy zmiennej:"),
		]),
		Br,
		createTextNode("Po angielsku: variable name segment"),
		Br,
		createTextNode("Jest to łańcuch co najmniej jednego znaku nazwy zmiennej."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Nazwa zmiennej:")]),
		Br,
		createTextNode("Po angielsku: variable name"),
		Br,
		createTextNode(
			"Jest to łańcuch co najmniej jednego segmentu nazwy zmiennej. Segmenty rodzielone są znakami białymi. Przykładowo: ",
		),
		createElement(Code, {} as const, [createTextNode("dividend")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("123.456")]),
		createTextNode(", "),
		createElement(Code, {} as const, [
			createTextNode("maximal divisor to check"),
		]),
		createTextNode("."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment słowa wywołania funkcji:"),
		]),
		Br,
		createTextNode("Po angielsku: word function call segment"),
		Br,
		createTextNode("Jest to słowo. Przykładowo: "),
		createElement(Code, {} as const, [createTextNode("prime")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("=")]),
		createTextNode("."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment znanej wywołania funkcji:"),
		]),
		Br,
		createTextNode("Po angielsku: known function call segment"),
		Br,
		createTextNode(
			"Jest to nawias okrągły zawierający nazwę zmiennej. Przykładowo: ",
		),
		createElement(Code, {} as const, [createTextNode("(dividend)")]),
		createTextNode(", "),
		createElement(Code, {} as const, [
			createTextNode("(maximal divisor to check)"),
		]),
		createTextNode("."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment nieznanej wywołania funkcji:"),
		]),
		Br,
		createTextNode("Po angielsku: unknown function call segment"),
		Br,
		createTextNode(
			"Jest to nawias kwadratowy zawierający nazwę zmiennej. Przykładowo: ",
		),
		createElement(Code, {} as const, [createTextNode("[remainder]")]),
		createTextNode(", "),
		createElement(Code, {} as const, [createTextNode("[result]")]),
		createTextNode("."),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [
			createTextNode("Segment wywołania funkcji:"),
		]),
		Br,
		createTextNode("Po angielsku: function call segment"),
		Br,
		createTextNode("Jest to jeden z:"),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode("Segment słowa wywołania funkcji"),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode("Segment znanej wywołania funkcji"),
		]),
		createElement(Li, {marginBlock: "none"} as const, [
			createTextNode("Segment nieznanej wywołania funkcji"),
		]),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createElement(Strong, {} as const, [createTextNode("Wywołanie funkcji:")]),
		Br,
		createTextNode("Po angielsku: function call"),
		Br,
		createTextNode(
			"Jest to łańcuch co najmniej jednego segmentu wywołania funkcji. Segmenty wywołania funkcji są rodzielone znakami białymi. Rozdzielające znaki białe mozna pominąć jeśli nie połączą one różnych segmentów słowa. Przykładowo: ",
		),
		createElement(Code, {} as const, [
			createTextNode("(dividend) % (divisor) = [remainder]"),
		]),
		createTextNode(", "),
		createElement(Code, {} as const, [
			createTextNode("(dividend)%(divisor)=[remainder]"),
		]),
		createTextNode(", "),
		createElement(Code, {} as const, [
			createTextNode(
				"none of the integers between (2) and (maximal divisor to check) divide (number)",
			),
		]),
		createTextNode("."),
	]),
	createElement(H4, {} as const, [createTextNode("Gramatyka")]),
	createElement(P, {} as const, [
		createTextNode(
			"Gramatyka została przygotowana tak, aby mógł ją sparsować parser LL(1). Wymagało to momentami zdefiniowania reguł gramatyki w sposób nieintuicyjny. Przykładowo, można byłoby się spodziewać, że reguła opisująca funkcję wyglądałaby następująco:",
		),
	]),
	// createElement(Pre, {} as const, [
	// 	createTextNode(
	// 		"<funkcja> ::= <opcjonalny oddzielony nagłówek funkcji> <ciało funkcji>",
	// 	),
	// 	createTextNode(
	// 		"<opcjonalny oddzielony nagłówek funkcji> ::= <nic> | <oddzielony nagłówek funkcji>",
	// 	),
	// 	createTextNode(
	// 		"<oddzielony nagłówek funkcji> ::= <nagłówek funkcji> <opcjonalne znaki białe>",
	// 	),
	// 	createTextNode("<opcjonalne znaki białe> ::= <nic> | <znaki białe>"),
	// 	createTextNode("<nagłówek funkcji> ::= <segmenty nagłówka funkcji>"),
	// ]),

	createElement(Pre, {marginBlock: "start"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<funkcja> ::=",
				"<opcjonalny oddzielony nagłówek funkcji>",
				"<ciało funkcji>",
			]),
		),
	]),
	createElement(Pre, {marginBlock: "none"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<opcjonalny oddzielony nagłówek funkcji> ::=",
				"<nic>",
				"|",
				"<oddzielony nagłówek funkcji>",
			]),
		),
	]),
	createElement(Pre, {marginBlock: "none"} as const, [
		createTextNode(
			computeFittingTextLayoutInPreAdapted([
				"<oddzielony nagłówek funkcji> ::=",
				"<nagłówek funkcji>",
				"<opcjonalne znaki białe>",
			]),
		),
	]),
	createElement(Pre, {marginBlock: "end"} as const, [
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
			"Jednak taki zbiór reguł nie byłby zgodny z wymaganiami parsera LL(1), ponieważ znaki białe byłyby używane zarówno do oddzielania segmentów nagłówka funkcji, jak i do oddzielania nagłówka funkcji od ciała funkcji. Parser musiałby w sytuacji parsowania segmentów nagłówka funkcji i napotkania znaku białego pójść dwiema ścieżkami. Parsery LL(1) wymagają, żeby napotkany znak mógł prowadzić tylko do jednej ścieżki parsowania.",
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Problem ten i podobne zostały rozwiązane poprzez potraktowanie segmentów nagłówka funkcji jako mających opcjonalne znaki białe na końcu każdego z nich. Znaki białe na końcu ostatniego segmentu nagłówka funkcji są wtedy traktowane jako oddzielające nagłówek funkcji od ciała funkcji.",
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			"Oto kompletna gramatyka zapisana w notacji Backusa-Naura (po angielsku: Backus-Naur form):",
		),
	]),
	...Object.values(ruleById).map((rule, index) => {
		return createElement(
			Pre,
			{
				marginBlock:
					index === 0 ? "start"
					: index === Object.values(ruleById).length - 1 ? "end"
					: "none",
			} as const,
			[
				createTextNode(
					computeFittingTextLayoutInPreAdapted(
						rule.stringifyToBackusNaurForm(ruleById),
					),
				),
			],
		);
	}),
	createElement(H3, {} as const, [createTextNode("Semantyka")]),
	createElement(H3, {} as const, [createTextNode("Model obliczeniowy")]),
];
