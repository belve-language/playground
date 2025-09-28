import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import {H3AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {H4AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {BrAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/br/BrAtomBuilder.ts";
import {SourceAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {TextAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {StrongAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/strong/StrongAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {InternetSource} from "../../../pages/source/Source.ts";
import {basePreAtomStyles} from "../../base-pre-atom-styles/basePreAtomStyles.ts";
export const podsumowanieChapter = [
	new H2AtomBuilder("Podsumowanie"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Cel pracy, którym było stworzenie minimalistycznego języka programowania z zachowaniem względnej czytelności kodu źródłowego, został osiągnięty. Język rzeczywiście działa i możliwe jest zapisanie w nim wielu algorytmów odnośnie których nie trzeba się zastanawiać jakich konstrukcji językowych użyć, aby możliwie skrócić kod. Tutaj konstrukcji jest na tyle mało, że napisane kody źródłowe stanowią wiarygodne odzwierciedlenie złożoności poznawczej algorytmów.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Implementacja języka udała się bez konieczności użycia zewnętrznych bibliotek i innych zależności. ",
		),
		new SourceAtomBuilder(
			"Przyjmuje się, że jest to bardzo pożądana codebase'ów",
			new InternetSource(
				"Tim Bray",
				new Date(1759065029994),
				"Przemyślenia na temat minimalizacji liczby zależności w oprogramowaniu",
				"https://0dependencies.dev/",
			),
		),
		new TextAtomBuilder(". Dzięki temu:"),
	]),
	new LiAtomBuilder({marginBlock: "1em 0em"}, [
		new TextAtomBuilder("Codebase jest odporny na ataki typu supply chain;"),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			"Utrzymanie codebase'u jest łatwiejsze – mniej zależności to czasu spędzone na ich aktualizowanie;",
		),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			"Pełna kontrola nad kodem źródłowym – w ekosystemie JavaScript/TypeScript zdarza się, że biblioteki są źle otypowane lub zawierają istotne błędy;",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Język nie jest oczywiście kompletny. Przytoczyć można wiele możliwych kierunków jego rozwoju, które mogłyby uczynić go jeszcze bardziej przystępnym, a może i nawet umożliwić jego rozpowszechnienie. Skupia się na tym następujący podrozdział.",
		),
	]),
	new H3AtomBuilder("Możliwa kontynuacja"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Poniżej przedstawiono kilka pomysłów na możliwą kontynuację pracy nad językiem. Wszystkie można zrealizować niezależnie od siebie.",
		),
	]),
	new H4AtomBuilder("Natywne wsparcie dla tekstowego typu danych"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W tym momencie wszelkie typy danych są całowicie zależne od wykorzystywanego interpretera – to on decyduje o tym, czy dana nazwa zmiennej odnosi się do globalnej czy lokalnej wartości. Przydatna byłaby modyfikacja gramatyki wprowadzająca natywną (czyli niezależną od interpretera) konstrukcję definiowania łańcuchów znaków. W szczególności przydałaby się możliwość łatwego tworzenia łańcuchów znaków (tekstów) wielowierszowych. Przykładowo, w języku Javascript jest to ",
		),
		new SourceAtomBuilder(
			"bardzo prosta konstrukcja",
			new InternetSource(
				"MDN",
				new Date(1759064678553),
				"Dokumentacja literałów szablonowych (template literals) w języku JavaScript",
				"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
			),
		),
		new TextAtomBuilder(
			`: Wystarczy otoczyć w kodzie źródłowym wybrany łańcuch znaków znakami backtick (`,
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0em 0em",
			},
			[new TextAtomBuilder("``")],
		),
		new TextAtomBuilder(
			`). Wtedy łańcuch znaków może zajmować wiele linii w kodzie źródłowym i zachowywać wszystkie znaki białe (spacje, tabulatory, znaki nowej linii).`,
		),
	]),
	new H4AtomBuilder("Moduły"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Język nie posiada mechanizmu modułów. Moduły są przydatne do organizowania kodu źródłowego w większe części, które można ponownie wykorzystać w innych programach. Wprowadzenie modułów wymagałoby rozszerzenia składni języka o konstrukcje importowania i eksportowania funkcji.",
		),
	]),
	new H4AtomBuilder("Komentarze"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Język nie posiada mechanizmu komentarzy. Komentarze są przydatne do dokumentowania kodu źródłowego i wyjaśniania jego działania. Wprowadzenie komentarzy wymagałoby rozszerzenia składni języka o konstrukcje komentarzy.",
		),
	]),
	new H4AtomBuilder("Typy danych na poziomie składni"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Język nie posiada typów danych na poziomie składni. Są one przydatne do określania rodzaju danych, które mogą być przechowywane w zmiennych, co zapobiega pomyłkom programisty. Potencjalnie również mogą pomóc optymalizować wykonywanie kodu. Wprowadzenie typów danych wymagałoby oprócz rozszerzenia składni języka o konstrukcje definiowania typów danych również mechanizm sprawdzania typów podczas kompilacji lub wykonywania kodu.",
		),
	]),
	new H4AtomBuilder("Kompilator"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Stosunkowo łatwo dałoby się napisać kompilator (transpilator) języka Belve do języka TypeScript, bo w języku docelowym napisany już jest interpreter.",
		),
	]),
	new H4AtomBuilder("Równoległe wykonywanie"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Język nadaje się do wprowadzenia w nim równoległej strategii wykonywania. Tę strategię można potraktować jako strategię pierwszoklasową, czyli nie trzeba zmieniać żadnych założeń języka. Zmiany wystarczy wprowadzić do interpreterów i kompilatorów.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Rozważyć wystarczy 2 sytuacje w zależności od napotkanego operatora:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder('Operator "lub":')]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Każda z alternatywnych ścieżek wykonania może być badana równolegle i wyniki z również nich mogą być zwracane równolegle.",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder('Operator "następnie":')]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Pierwszą instrukcję i resztę instrukcji można wykonywać równolegle dopóki w reszcie instrukcji nie pojawi się instrukcja wywołania funkcji, która wywołuje funkcję korzystając z nieznanej poznanej w pierwszej instrukcji. Wtedy należy zaczekać na wynik pierwszej instrukcji.",
		),
	]),
	new H4AtomBuilder("Przerywanie nawracania"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			'Przydatnym mechanizmem, który poprawiłby komfort pisania kodu, byłoby wprowadzenie możliwości przerywania nawracania. Nawracanie jest oczywiście powiązany z operatorem "lub", bo to ten operator wprowadza alternatywne ścieżki wykonania. Czasem badanie pozostałych ścieżek nie ma sensu. Spójrzmy na przykład funkcji sprawdzającej istnienie dzielników zadanej liczby:',
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
			new TextAtomBuilder(
				`none of the integers between (start) and (end) divide (dividend) {
	(start) > (end).
	(start) <= (end),
	is (dividend) not divisible by (start),
	(start) + (1) = [next start],
	none of the integers between (next start) and (end) divide (dividend)
}`,
			),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Widać, że ścieżki wykonania wykluczają się - Otrzymanie wyniku pierwszej instrukcji oznacza, że reszty instrukcji można w ogóle nie wykonywać. I tak nie dałyby one żadnego wyniku.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Można by więc wprowadzić nowy operator, który w ogóle nie dopuściłby do wykonania reszty instrukcji, gdy pierwsza instrukcja zwróci jakikolwiek wynik. Jest to popularny mechanizm w językach programowania i jest to przykład strategii skróconego ewaluowania.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy mieć jednak na uwadze, że zastosowanie takiego operatora uniemożliwia badanie równoległe ścieżek wykonania.",
		),
	]),
	new H4AtomBuilder("Serwer językowy realizujący Language Server Protocol"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Istotnym dla rozpowszechnienia użycia języka byłoby stworzenie serwera językowego realizującego Language Server Protocol. Serwery takie są kluczowe dla współczesnych realiów programowania.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 0em"}, [
		new TextAtomBuilder(
			"W przypadku języka Belve, serwer językowy realizowałby następujące zadania:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 0em"}, [
		new TextAtomBuilder("Podświetlanie składni;"),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder(
			"Podpowiadanie nazw funkcji podczas pisania instrukcji wywołania funkcji;",
		),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder("Podpowiadanie nazw zmiennych;"),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder("Automatyczne formatowanie kodu źródłowego;"),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder("Wczesne wykrywanie błędów lintowania;"),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder("Oferowanie mechanizmów refaktoryzacji kodu:"),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder("Zmiana nazwy zmiennej;"),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder("Ekstrakcja instrukcji bloku do nowej funkcji;"),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new TextAtomBuilder("Zmiana nazwy funkcji;"),
		]),
	]),
	new LiAtomBuilder({marginBlock: "0em 0em"}, [
		new TextAtomBuilder("Generowanie szkieletów funkcji;"),
	]),
	new LiAtomBuilder({marginBlock: "0em 1em"}, [
		new TextAtomBuilder("Pomoc w nawigowaniu po kodzie źródłowym;"),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
