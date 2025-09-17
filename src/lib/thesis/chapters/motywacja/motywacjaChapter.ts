import type {Atom} from "../../../pages/atom/Atom.ts";
import {createElement} from "../../../pages/html/node/implementations/element/creating/createElement.ts";
import Code from "../../../pages/html/node/implementations/element/implementations/code/Code.svelte";
import H2 from "../../../pages/html/node/implementations/element/implementations/h2/H2.svelte";
import Li from "../../../pages/html/node/implementations/element/implementations/li/Li.svelte";
import P from "../../../pages/html/node/implementations/element/implementations/p/P.svelte";
import Pre from "../../../pages/html/node/implementations/element/implementations/pre/Pre.svelte";
import {createTextNode} from "../../../pages/html/node/implementations/text/creating/createTextNode.ts";
export const motywacjaChapter = [
	createElement(H2, {} as const, [createTextNode("Motywacja")]),
	createElement(P, {} as const, [
		createTextNode(`W różnych dyskusjach programistycznych usłyszeć można wzmianki o tym, ile linii kodu ma dany codebase, rozwiązanie, algorytm czy funkcja. Liczby te przytaczane są jako miary złożoności kodu. Mowa tu o złożoności rozumianej nie jako złożoność obliczeniowa, a złożoność poznawcza. Bo przecież im więcej linii kodu, tym trudniej jest go zrozumieć. Jest to też miara bardzo prosta - we współczesnych edytorach programistycznych przy każdej linii kodu wyświetla się jej numer. Wystarczy przeczytać ostatni numer i dowie się przez to, ile linii ma kod. Ale czy jest to miara wiarygodna? Nie jest - wszystkie z najpopoularniejszych języków programowania mają możliwość pisania dopisywania do kodów pustych linii, które nie mają żadnego wpływu na działanie kodu. Problem ten rozwiązać można stosując formater kodu ( lub linter, który znajdzie te fragmenty i można je potem usunąć ręcznie), który usunie z kodu zbędne białe znaki i puste linie. Ze sformatowanego kodu następnie odczytać można liczbę linii. Ale czy to wystarczy? Niestety szybko napotkamy na kolejny problem - styl programowania.
Przykładowo w języku JavaScript wiele zmiennych można tworzyć za pomocą jednej instrukcji:`),
	]),
	createElement(Pre, {marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`const a = 1, b = 2, c = 3;
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(`lub za pomocą wielu instrukcji:`),
	]),
	createElement(Pre, {marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`const a = 1;
const b = 2;
const c = 3;
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Niektóre formattery mogą sobie z tym poradzić umieszczając każdą parę nazwy zmiennej i jej wartości w osobnej linii, ale gorzej robi się, gdy dowiemy się, że funkcje również można tworzyć na różne sposoby:`,
		),
	]),
	createElement(Pre, {marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`function add(a, b) {
	return a + b;
}
`),
		]),
	]),
	createElement(P, {} as const, [createTextNode(`lub`)]),
	createElement(Pre, {marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`const add = (a, b) => a + b;
`),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`W takim wypadku formatery zdecydują się zpisać kod z nawiasami klamrowymi w 3 liniach, a kod bez nich (używający składni strzałkowej) w 1 linii. W ten sposób ten sam kod może mieć różną liczbę linii w zależności od stylu programowania. Z punktu widzenia wykonania funkcji, powyższe kody są równoznaczne. W takich scenariuszach sięgnąć można po kolejne narzędzie - linter. może on wymusić na programiście konkretny styl programowania, a formater będzie mógł sformatować kod w jeden, spójny sposób. Wtedy liczba linii kodu będzie bardziej wiarygodna. Ale czy to wystarczy? W momencie gdy kod zacznie robić coś przydatnego, dochodzimy do kolejnego problemu - paradygmatu programowania. Weźmy za przykład znowu język JavaScript. Niech tym razem funkcja zajmuje się przeprowadzaniem algorytmu sortowania przez wstawianie (insertion sort).
JavaScript jest językiem wieloparadygmatowym - można w nim pisać w paradygmacie delaratywnym i imperatywnym.
Rozwiązanie imperatywne może wyglądać tak:`,
		),
	]),
	createElement(Pre, {marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`function insertionSortImperatively(numbers) {
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
	]),
	createElement(P, {} as const, [
		createTextNode(`a rozwiązanie deklaratywne tak:`),
	]),
	createElement(Pre, {marginBlock: "both"} as const, [
		createElement(Code, {} as const, [
			createTextNode(`function insertionSortDeclaratively(numbers) {
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
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Oba te kody nie mutują wejściowej tablicy numbers i zwracają nową posortowaną tablicę. Oba są stabilne i oba mają tę samą złożoność obliczeniową O(n^2). Oba zostały przeformatowane tym samym formatterem z tymi samymi ustawieniami i oba spełniają te same reguły lintera. Można doszukać się różnic z rzeczywistym czasie działań poszczególnych instrukcji, ale z punktu widzenia złożoności obliczeniowej oba są równoznaczne. Oba mają podobną czytelność - nie skracają nazw zmiennych, nie używają skrótów, mają sensowne nazwy funkcji i zmiennych. Tutaj już nie ma narzędzia, które pozwoliłoby nam wybrać, które zasugerowałoby pewne ustandaryzowanie kodu. Okazuje się, że kod declaratywny jest krótszy - ma mniej linii kodu oraz mniej znaków. Wykazuje to, że miara liczby linii kodu (lub liczby znaków) nie jest wiarygodna jeśli chodzi o porównanie tego, jak złożony jest dany program (te programy są tak samo złożone, ponieważ robią to samo i mają tę samą złożoność obliczeniową). Rozwiązaniem tego problemu jest ograniczenie możliwych do wykorzystania konstrukcji do minimalnego zestawu. Można to zrobić idąc w 2 przeciwstawne końce spektrum:`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`używając języka programowania bardzo niskiego poziomu, który jest wysoce imperatywny i implementuje bezpośrednio zestaw instrukcji oferowanych przez architekturę komputera (np. asembler);`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`używając języka programowania bardzo wysokiego poziomu, który jest wysoce deklaratywny i odrzucił wiele konstrukcji imperatywnych (np. Prolog);`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Ciekawsze jest drugie podejście - użycie języka bardzo wysokiego poziomu. Ostatecznie bezpośrednio lub pośrednio sprowadza się on i tak do języka niskiego poziomu, a zyskujemy większą przystępność dla programisty.`,
		),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Pochylmy się na Prologiem. Mimo tego, że nie ma w nim konstrukcji typowo imperatywnych to i tak występuje problem z możliwością zapisu tego samego kodu na różne sposoby. Zobaczmy to na przykładznie poniższych równoznacznych kodów:`,
		),
	]),
	createElement(Li, {marginBlock: "both"} as const, [
		createElement(Pre, {marginBlock: "none"} as const, [
			createElement(Code, {} as const, [
				createTextNode(`rodzic(ania, bartek).
rodzic(ania, celina).
`),
			]),
		]),
	]),
	createElement(Li, {marginBlock: "both"} as const, [
		createElement(Pre, {marginBlock: "none"} as const, [
			createElement(Code, {} as const, [
				createTextNode(`rodzic(ania, bartek) :- true.
rodzic(ania, celina) :- true.
`),
			]),
		]),
	]),
	createElement(Li, {marginBlock: "both"} as const, [
		createElement(Pre, {marginBlock: "none"} as const, [
			createElement(Code, {} as const, [
				createTextNode(`rodzic(X, Y) :-
	X = ania,
	Y = bartek.

rodzic(X, Y) :-
	X = ania,
	Y = celina.
`),
			]),
		]),
	]),
	createElement(P, {} as const, [
		createTextNode(
			`Niestety dla zachowania czytelności kodu, mówiąc w ogólności, nie jest możliwe całkowita redukcja języka do minimalnego zestawu konstrukcji. Udowadniają to następujące popularne konstrukcje w językach programowania:`,

			// funkcje wieloparametrowe. Wiemy, o funkcji, że na pewno należy ona do minimalnego zestawu konstrukcji (patrz rachunek lambda). Ale dla programistów wygodne i czytelne przygotowanie jest funkcji, które mają wiele parametrów. pozwala to na szybkie ustalenie od jakich czynników zależy wynik funkcji. Jeśli dozwolone są higher order functions, to możliwe jest rozbicie funkcji wieloparametrowej na funkcje jednoargumentowe (currying). a jeśli nie są możliwe higher order functions to przykładem może być fakt, że dostatecznie skomplikowany kod będzie zawierać więcej niż jedną możliwą ścieżkę wykonania. Mając minimalny zestaw możliwych konstrukcji w języku, na pewno te ścieżki musiałyby być zapisane jako osobne funkcje. Wtedy jednak kod szybko staje się nieczytelny`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`Funkcje wieloparametrowe (multi-parameter functions) - jeśli w języku są dostępne funkcje wyższego rzędu (higher order functions), to funkcje wieloparametrowe można rozbić na funkcje jednoargumentowe używając techniki rozwijania funkcji (currying);`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(`Bloki - da się je rozbić na dodatkowe funkcje;`),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`Destrukturyzacja (destructuring) - da się ją rozbić na dodatkowe zmienne i przypisania;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`Wyrażenia złożone z pominiętymi nawiasami (compound expressions with skipped parentheses) - da się umieścić nawiasy;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`Wyrażenia złożone (compound expressions) - da się każde składowe wyrażenie umieścić w osobnej zmiennej;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`Instrukcja return (return statement) - da się przyjąć, że zwracaną przez funkcje wartością jest wynik ostatniego wyrażenia;`,
		),
	]),
	createElement(Li, {marginBlock: "none"} as const, [
		createTextNode(
			`Definiowanie zmiennych poza nagłówkiem funkcji (defining variables outside the function header) - da się całkowicie zrezygnować z definiowania zmiennych poza nagłówkiem funkcji tworząc dodatkowe funkcje i przekazywać bezpośrednio wyniki obliczeń;`,
		),
	]),
	createElement(P, {marginBlock: "none"} as const, [
		createTextNode(
			`Wyobraźmy sobie język programowania, który nie ma powyższych konstrukcji. W takim języku kod źródłowy będzie bardzo długi i nieczytelny. Przypominałby raczej rachunek lambda niż współczesny język programowania, ale byłby on dobrym miernikiem tego, jak bardzo faktycznie złożony jest napisany w nim program.`,
		),
	]),
	createElement(P, {marginBlock: "none"} as const, [
		createTextNode(
			`Język programowania będący przedmiotem tej pracy magisterskiej postara się być językiem z minimalnym zestawem konstrukcji (albo przynajmniej z bardzo ograniczonym ich zestawem), a jednocześnie będzie językiem względnie czytelnym.`,
		),
	]),
] as const satisfies readonly Atom[];
