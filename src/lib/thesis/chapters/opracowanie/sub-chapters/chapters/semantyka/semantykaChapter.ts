import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {H4AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {H5AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/5/H5AtomBuilder.ts";
import {CodeAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/code/CodeAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/text/TextAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
export const semantykaChapter = [
	new H3AtomBuilder("Semantyka"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Semantykę konstrukcji najprościej omówić, odwołując się do wcześniej przedstawionych konstrukcji – jednak w odwrotnej kolejności.",
		),
	]),
	new H4AtomBuilder("Kod źródłowy (source code)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Kod źródłowy stanowi zbiór funkcji. Funkcje rozróżniane są poprzez swoje nagłówki, dlatego ich nagłówki nie mogą się powtarzać. Może istnieć co najwyżej jedna funkcja bez nagłówka – jest ona rozumiana jako funkcja główna, czyli ta, która uruchamia się automatycznie po rozpoczęciu działania programu utworzonego na podstawie kodu źródłowego.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Przykładowo, oto kod źródłowy składający się z trzech funkcji, w tym jednej głównej:",
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
				new TextAtomBuilder(`is (n) divisible by (d) {
	(n) % (d) = [r],
	(r) = (0)
}

is (n) even {
	(n) divisible by (2)
}

{
	is (10) even
}`),
			]),
		],
	),
	new H4AtomBuilder("Funkcja (function)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Funkcja to instrukcja bloku (stanowiąca jej ciało), której przypisano opcjonalny nagłówek identyfikujący tę funkcję. Funkcja reprezentuje powtarzalny fragment kodu, który może zostać wykonany z pewnym zestawem początkowych znanych zmiennych. Nazywa się to wywołaniem. Nieznane zmienne, które zostaną poznane podczas wykonywania ciała funkcji, są zwracane do instrukcji, która tę funkcję wywołała.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Przykładowo, oto funkcja składająca się z nagłówka i ciała:",
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
				new TextAtomBuilder(`is (n) divisible by (d) {
	(n) % (d) = [r],
	(r) = (0)
}`),
			]),
		],
	),
	new H4AtomBuilder("Instrukcja (statement)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Instrukcja to wywołanie funkcji albo blok instrukcji. Jej wykonanie może skutkować poznaniem pewnych dotąd nieznanych zmiennych.",
		),
	]),
	new H5AtomBuilder("Instrukcja bloku"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Instrukcja bloku składa się z sekwencji instrukcji. Jej wykonanie jest równoznaczne z wykonaniem wszystkich zawartych w niej instrukcji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder("Przykładowo, oto instrukcja bloku:"),
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
				new TextAtomBuilder(`{
	(n) % (d) = [r],
	(r) = (0)
}`),
			]),
		],
	),
	new H5AtomBuilder("Instrukcja wywołania funkcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Instrukcja wywołania funkcji to odwołanie do funkcji wskazanej w tej instrukcji. Jej wykonanie umożliwia poznanie nieznanych zmiennych zdefiniowanych w nagłówku wywoływanej funkcji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Przykładowo, oto instrukcja wywołania funkcji () is divisible by ():",
		),
	]),
	new PreAtomBuilder(
		{
			...basePreAtomStyles,
			display: "block",
			fontSize: "1em",
			marginBlock: "1em 1em",
		},
		[new CodeAtomBuilder([new TextAtomBuilder(`(n) divisible by (d)`)])],
	),
	new H4AtomBuilder("Sekwencja instrukcji (statements)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Sekwencja instrukcji ma co najmniej jedną instrukcję, a instrukcje rozdzielone są operatorami. Wykonywane są w kolejności od pierwszej do ostatniej. Operatory określają warunki, w których możliwe jest przejście do wykonania kolejnej instrukcji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Przykładowo, oto sekwencja instrukcji składająca się z trzech instrukcji i dwóch operatorów:",
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
					`(user) wants to remove a resource, (user) is an admin.
(user) is the owner of (resource)
`,
				),
			]),
		],
	),
	new H4AtomBuilder("Nagłówek funkcji (function header)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Nagłówek funkcji definiuje, jakie zmienne są znane, a jakie nieznane w kontekście danej funkcji. Zawiera także dodatkowe elementy umożliwiające identyfikację funkcji oraz podpowiadające programiście jej przeznaczenie i sposób działania.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Przykładowo, oto nagłówek funkcji definiujący dwie znane (start i end) i jedną nieznaną (integer):",
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
					`an integer between (start) and (end) is [integer]`,
				),
			]),
		],
	),
	new H4AtomBuilder("Operator (operator)"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Operator to konstrukcja rozdzielająca instrukcje w sekwencji instrukcji. Określa warunki, w których możliwe jest przejście do wykonania kolejnej instrukcji.",
		),
	]),
	new H5AtomBuilder('Operator "lub" ("or" operator)'),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Operator "lub" pozwala na niezależne wykonanie instrukcji z jego lewej strony i pozostałej sekwencji instrukcji z jego prawej strony. Nieznane poznawane są niezależnie przez te dwie ścieżki wykonania.',
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder('Przykładowo, oto instrukcja z operatorem "lub":'),
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
				new TextAtomBuilder(`(n) = (0). {(n) - (2) = [m], is (m) even}`),
			]),
		],
	),
	new H5AtomBuilder('Operator "i" ("and" operator)'),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Operator "i" wymaga, aby instrukcja z jego lewej strony została wykonana przed przejściem do pozostałej sekwencji instrukcji z jego prawej strony. Nieznane poznane w wyniku wykonania instrukcji z lewej strony są przekazywane jako dostępne do wykonania pozostałej sekwencji instrukcji z prawej strony. Poznane nieznane są łączone.',
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder('Przykładowo, oto instrukcja z operatorem "i":'),
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
					`a [solution] exists, the rating of the (solution) is [rating]`,
				),
			]),
		],
	),
] as const satisfies readonly SupportedAtomBuilder[];
