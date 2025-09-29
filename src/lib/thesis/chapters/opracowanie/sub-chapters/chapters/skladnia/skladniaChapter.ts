import {grammar} from "../../../../../../instances/grammar/grammar.ts";
import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {H4AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {BrAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/br/BrAtomBuilder.ts";
import {SourceAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {StrongAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/strong/StrongAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
import {checkIfRuleIsInteresting} from "../../../../../checking-if-rule-is-interesting/checkIfRuleIsInteresting.ts";
import {computeFittingTextLayoutInPreAdapted} from "../../../../../computing-fitting-text-layout-in-pre-adapted/computeFittingTextLayoutInPreAdapted.ts";
import {ll1Source} from "../../../../implementacja/sub-chapters/chapters/parser/parserChapter.ts";
export const skladniaChapter = [
	new H3AtomBuilder("Składnia"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Składnię języka można opisać, przechodząc od szczegółu do ogółu:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Znak biały (whitespace character):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Przykładowo spacja, tabulator i znak nowej linii;"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Znak operatora (operator character):"),
		]),
		new BrAtomBuilder(),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder(",")],
		),
		new TextAtomBuilder(" (przecinek) i "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder(".")],
		),
		new TextAtomBuilder(" (kropka);"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Znak słowa (word character):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Litery (małe i wielkie), cyfry oraz znaki pomocnicze takie jak ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("@")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("#")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("^")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("+")],
		),
		new TextAtomBuilder(" i "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("-")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Znak segmentu nazwy zmiennej (variable name segment character):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Znak operatora lub znak słowa;"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Znaki białe (whitespace characters):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Łańcuch składający się z co najmniej jednego znaku białego;",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Słowo (word):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Łańcuch składający się z co najmniej jednego znaku słowa;",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Operator (operator):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Znak operatora. Wyróżnia się dwa rodzaje operatorów:"),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new StrongAtomBuilder([
				new TextAtomBuilder('Operator "następnie" ("then" operator):'),
			]),
			new BrAtomBuilder(),
			new TextAtomBuilder("Reprezentowany poprzez "),
			new PreAtomBuilder(
				{
					...basePreAtomStyles,
					display: "inline",
					fontSize: "1em",
					marginBlock: "0em 0em",
				},
				[new TextAtomBuilder(",")],
			),
			new TextAtomBuilder(" (przecinek);"),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new StrongAtomBuilder([
				new TextAtomBuilder('Operator "lub" ("or" operator):'),
			]),
			new BrAtomBuilder(),
			new TextAtomBuilder("Reprezentowany poprzez "),
			new PreAtomBuilder(
				{
					...basePreAtomStyles,
					display: "inline",
					fontSize: "1em",
					marginBlock: "0em 0em",
				},
				[new TextAtomBuilder(".")],
			),
			new TextAtomBuilder(" (kropkę);"),
		]),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Segment nazwy zmiennej (variable name segment):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Łańcuch co najmniej jednego znaku nazwy zmiennej;"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Nazwa zmiennej (variable name):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Łańcuch co najmniej jednego segmentu nazwy zmiennej. Segmenty oddzielone są znakami białymi. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("dividend")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("123.456")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("maximal divisor to check")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment słowa wywołania funkcji (word function call segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Słowo. Przykładowo: "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("prime")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("=")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment znanej wywołania funkcji (known function call segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Nawias okrągły zawierający nazwę zmiennej. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(dividend)")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(maximal divisor to check)")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment nieznanej wywołania funkcji (unknown function call segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Nawias kwadratowy zawierający nazwę zmiennej. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("[remainder]")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("[result]")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment słowa nagłówka funkcji (word function header segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Słowo. Przykładowo: "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("prime")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("=")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment znanej nagłówka funkcji (known function header segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Nawias okrągły zawierający nazwę zmiennej. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(dividend)")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(maximal divisor to check)")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment nieznanej nagłówka funkcji (unknown function header segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Nawias kwadratowy zawierający nazwę zmiennej. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("[remainder]")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("[result]")],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Segment wywołania funkcji (function call segment):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Jest to jeden z:"),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder(
				"Segment słowa wywołania funkcji (word function call segment);",
			),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder(
				"Segment znanej wywołania funkcji (known function call segment);",
			),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder(
				"Segment nieznanej wywołania funkcji (unknown function call segment);",
			),
		]),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Segment nagłówka funkcji (function header segment):",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Jest to jeden z:"),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder(
				"Segment słowa nagłówka funkcji (word function header segment);",
			),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder(
				"Segment znanej nagłówka funkcji (known function header segment);",
			),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder(
				"Segment nieznanej nagłówka funkcji (unknown function header segment);",
			),
		]),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Nagłówek funkcji (function header):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Łańcuch co najmniej jednego segmentu nagłówka funkcji. Segmenty te są oddzielone znakami białymi. Znaki białe można pominąć, o ile nie łączą różnych segmentów słowa. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(dividend) % (divisor) = [remainder]")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(dividend)%(divisor)=[remainder]")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new TextAtomBuilder(
					"no integer between (2) and (max divisor to check) divides (number)",
				),
			],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Sekwencja instrukcji (statements):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Łańcuch co najmniej jednej instrukcji, rozdzielonych operatorami. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new TextAtomBuilder(
					"(number) > (1), (number) ^ (0.5) = [max divisor to check]",
				),
			],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Blok (block):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Sekwencja instrukcji ujęta w nawiasy klamrowe. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new TextAtomBuilder(`{
    (number) > (1),
    (number) ^ (0.5) = [max divisor to check],
    no integer between (2) and (max divisor to check) divides (number)
}`),
			],
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder("Wywołanie funkcji (function call):"),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Łańcuch co najmniej jednego segmentu wywołania funkcji. Segmenty te są oddzielone znakami białymi. Znaki białe można pominąć, o ile nie łączą różnych segmentów słowa. Przykładowo: ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(dividend) % (divisor) = [remainder]")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("(dividend)%(divisor)=[remainder]")],
		),
		new TextAtomBuilder(", "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new TextAtomBuilder(
					"no integer between (2) and (max divisor to check) divides (number)",
				),
			],
		),
		new TextAtomBuilder(";"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Instrukcja (statement):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Jest to jedna z:"),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder("Wywołanie funkcji (function call);"),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder("Blok (block);"),
		]),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Funkcja (function):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Opcjonalny nagłówek funkcji oraz wymagane ciało funkcji (blok). Przykładowo:",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[
				new TextAtomBuilder(`(dividend) % (divisor) = [remainder] {
    (number) > (1),
    (number) ^ (0.5) = [max divisor to check],
    no integer between (2) and (max divisor to check) divides (number)
}`),
			],
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Zbiór funkcji (functions):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Łańcuch co najmniej jednej funkcji;"),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Kod źródłowy (source code):")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Opcjonalny zbiór funkcji. Można oddzielać składowe funkcje znakami białymi w dowolny sposób.",
		),
	]),
	new H4AtomBuilder("Gramatyka"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Gramatyka została przygotowana tak, aby mogła zostać sparsowana przez ",
		),
		new SourceAtomBuilder("parser LL(1)", ll1Source),
		new TextAtomBuilder(
			". Wymagało to w niektórych miejscach zdefiniowania reguł w sposób nieintuicyjny.",
		),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Na przykład można byłoby się spodziewać, że reguła opisująca funkcję będzie wyglądała następująco:",
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 0em",
		} as const,
		[
			new TextAtomBuilder(
				computeFittingTextLayoutInPreAdapted([
					"<funkcja> ::=",
					"<opcjonalny oddzielony nagłówek funkcji>",
					"<ciało funkcji>",
				]),
			),
		],
	),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "0em 0em",
		},
		[
			new TextAtomBuilder(
				computeFittingTextLayoutInPreAdapted([
					"<opcjonalny oddzielony nagłówek funkcji> ::=",
					"<nic>",
					"|",
					"<oddzielony nagłówek funkcji>",
				]),
			),
		],
	),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "0em 0em",
		},
		[
			new TextAtomBuilder(
				computeFittingTextLayoutInPreAdapted([
					"<oddzielony nagłówek funkcji> ::=",
					"<nagłówek funkcji>",
					"<opcjonalne znaki białe>",
				]),
			),
		],
	),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "0em 1em",
		},
		[
			new TextAtomBuilder(
				computeFittingTextLayoutInPreAdapted([
					"<opcjonalne znaki białe> ::=",
					"<nic>",
					"|",
					"<znaki białe>",
				]),
			),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Taki zbiór reguł nie byłby jednak zgodny z wymaganiami parsera LL(1), ponieważ znaki białe byłyby używane zarówno do oddzielania segmentów nagłówka funkcji, jak i do oddzielania nagłówka funkcji od ciała funkcji.",
		),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Parser, napotykając znak biały, musiałby rozważyć dwie ścieżki parsowania. Parsery LL(1) wymagają jednak, aby każdy symbol wejściowy prowadził tylko do jednej możliwej ścieżki parsowania.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Problem ten i inne podobne rozwiązano poprzez potraktowanie segmentów nagłówka funkcji jako posiadających opcjonalne znaki białe na końcu każdego z nich.",
		),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Znaki białe występujące po ostatnim segmencie nagłówka funkcji są wówczas interpretowane jako oddzielające nagłówek od ciała funkcji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Poniżej znajduje się gramatyka zapisana w notacji Backusa-Naura. Zostały pominięte pewne mniej istotne reguły. Regułą początkową jest ",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder(`<${grammar.startingRule.name}>`)],
		),
		new TextAtomBuilder("."),
	]),
	...Array.from(
		new Set(
			Array.from(grammar.startingRule.iterateAllWithDepth(grammar.ruleById))
				.filter((result) => {
					const isRuleInteresting = checkIfRuleIsInteresting(result.rule);
					return isRuleInteresting;
				})
				.toSorted((result1, result2) => {
					return result1.depth - result2.depth;
				})
				.map((result) => {
					return result.rule;
				}),
		),
	).map((rule, index) => {
		return new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: `${index === 0 ? "1em" : "0em"} ${index === Object.values(grammar.ruleById).length - 1 ? "1em" : "0em"}`,
			},
			[
				new TextAtomBuilder(
					computeFittingTextLayoutInPreAdapted(
						rule.stringifyToBackusNaurForm(grammar.ruleById),
					),
				),
			],
		);
	}),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Warto zaznaczyć, że w opisanej powyżej składni znajduje się pewna nadmiarowa konstrukcja – sekwencje instrukcji mogłyby składać się z samych instrukcji wywołania funkcji, a instrukcje bloku mogłyby być używane tylko jako ciała funkcji. Mogłoby to pogorszyć czytelność kodu źródłowego poprzez dużą liczbę małych funkcji. Decyzja o używaniu instrukcji bloku w sekwencjach instrukcji niech będzie pozostawiona programiście.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
