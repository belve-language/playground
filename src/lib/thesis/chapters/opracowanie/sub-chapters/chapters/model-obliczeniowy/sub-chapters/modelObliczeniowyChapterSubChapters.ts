import {funkcjeChapter} from "./chapters/funkcje/funkcjeChapter.ts";
import {H4AtomBuilder} from "../../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {H5AtomBuilder} from "../../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/5/H5AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
export const modelObliczeniowyChapterSubChapters = [
	...funkcjeChapter,
	new H4AtomBuilder("Wywołanie funkcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy przyjąć ciąg znanych zapisanych w postaci pozycyjnej i zamienić na postać nazwową. Następnie należy potraktować te znane jako zmienne dostępne i rozpocząć z nimi wykonywanie ciała funkcji (jest ono instrukcją bloku). Każdy wynik wykonania ciała funkcji będzie wynikiem wywołania funkcji, ale z wyniku wykonania odczytane poznane nieznane należy najpierw zamienić na postać pozycyjną i dopiero wtedy można je zwrócić w wyniku wywołania funkcji.",
		),
	]),
	new H4AtomBuilder("Instrukcja"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy rozróżnić 2 rodzaje instrukcji: instrukcję bloku i instrukcję wywołania funkcji.",
		),
	]),
	new H5AtomBuilder("Instrukcja bloku"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Instrukcja bloku zawiera sekwencję instrukcji. Należy je wykonać i traktować każdy wynik wykonania jako wynik wykonania instrukcji bloku.",
		),
	]),
	new H5AtomBuilder("Instrukcja wywołania funkcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy odczytać ze zmiennych dostępnych te, które są wymienione jako znane w wywołaniu funkcji i zamienić je na postać pozycyjną. Następnie należy wywołać funkcję z tymi znanymi w postaci pozycyjnej.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Każdy wynik wywołania funkcji da poznane nieznane zapisane w postaci pozycyjnej. Należy je zamienić na postać nazwową i potraktować jako poznane nieznane i zwrócić w wyniku wykonania instrukcji wywołania funkcji.",
		),
	]),
	new H4AtomBuilder("Sekwencja instrukcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy rozważyć 2 rodzaje instrukcji w zależności od tego, ile instrukcji zawiera sekwencja instrukcji.",
		),
	]),
	new H5AtomBuilder("Sekwencja finalna instrukcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Sekwencja finalna instrukcji zawiera tylko jedną instrukcję. Należy wykonać tę instrukcję i traktować każdy jej wynik wykonania jako wynik wykonania sekwencji finalnej instrukcji.",
		),
	]),
	new H5AtomBuilder("Sekwencja pośrednia instrukcji"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Sekwencja pośrednia instrukcji to para: pierwsza operowana instrukcja i reszta instrukcji, będąca sekwencją instrukcji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy wykonać pierwszą operowaną instrukcję i przekazać do tego wykonania resztę instrukcji, będącą sekwencją instrukcji. Każdy wynik tego wykonania należy traktować jako wynik wykonania sekwencji pośredniej instrukcji.",
		),
	]),
	new H4AtomBuilder("Operowana instrukcja"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder("Operowana instrukcja to para: instrukcja i operator."),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy wykonać operację operatora przekazując do niej instrukcję i resztę instrukcji, będącą sekwencją instrukcji. Każdy wynik tej operacji należy traktować jako wynik wykonania operowanej instrukcji.",
		),
	]),
	new H4AtomBuilder("Operator"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Należy rozróżnić 2 operatory: operator "następnie" i operator "lub".',
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Operator do działania wymaga pary operandów: pierwszej instrukcji i reszty instrukcji, będącej sekwencją instrukcji.",
		),
	]),
	new H5AtomBuilder('Operator "lub"'),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Należy wykonać pierwszą instrukcję i traktować każdy jej wynik wykonania jako wynik wykonania operatora "lub".',
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Niezależnie należy wykonać resztę instrukcji, będącą sekwencją instrukcji, z tymi samymi dostępnymi zmiennymi, co przy wykonywaniu pierwszej instrukcji (czyli bez włączania ewentualnych poznanych nieznanych do zmiennych dostępnych). Należy traktować każdy wynik wykonania reszty instrukcji jako wynik wykonania operatora "lub".',
		),
	]),
	new H5AtomBuilder('Operator "następnie"'),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Należy wykonać pierwszą instrukcję. Dla każdego jej wyniku wykonania należy niezależnie włączyć poznane nieznane do zmiennych dostępnych i wykonać resztę instrukcji z tymi dostępnymi zmiennymi. Każdy wynik wykonania reszty instrukcji, będącej sekwencją instrukcji, należy traktować jako wynik wykonania operatora "następnie".',
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
