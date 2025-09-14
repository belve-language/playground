Używane pojęcia

- formatter
- linter
- codebase

W różnych dyskusjach programistycznych usłyszeć można wzmianki o tym, ile linii kodu ma dany codebase, rozwiązanie, algorytm czy funkcja. Liczby te przytaczane są jako miary złożoności kodu. Mowa tu o złożoności rozumianej nie jako złożoność obliczeniowa, a złożoność poznawcza. Bo przecież im więcej linii kodu, tym trudniej jest go zrozumieć. Jest to też miara bardzo prosta - we współczesnych edytorach programistycznych przy każdej linii kodu wyświetla się jej numer. Wystarczy przeczytać ostatni numer i dowie się przez to, ile linii ma kod. Ale czy jest to miara wiarygodna?
Nie jest - wszystkie z najpopoularniejszych języków programowania mają możliwość pisania dopisywania do kodów pustych linii, które nie mają żadnego wpływu na działanie kodu. Problem ten rozwiązać można stosując formater kodu ( lub linter, który znajdzie te fragmenty i można je potem usunąć ręcznie), który usunie z kodu zbędne białe znaki i puste linie. Ze sformatowanego kodu następnie odczytać można liczbę linii. Ale czy to wystarczy? Niestety szybko napotkamy na kolejny problem - styl programowania.
Przykładowo w języku JavaScript wiele zmiennych można tworzyć za pomocą jednej instrukcji lub osobno - po jednej zmiennej na instrukcję:

```javascript
// wiele zmiennych w jednej instrukcji
const a = 1,
	b = 2,
	c = 3;
```

```javascript
const a = 1;
const b = 2;
const c = 3;
```

Niektóre formattery mogą sobie z tym poradzić umieszczając każdą parę nazwy zmiennej i jej wartości w osobnej linii, ale gorzej robi się, gdy dowiemy się, że funkcje również można tworzyć na różne sposoby:

```javascript
function add(a, b) {
	return a + b;
}
```

```javascript
const add = (a, b) => a + b;
```

W takim wypadku formattery zdecydują się zpisać kod z nawiasami klamrowymi `{}` w 3 liniach, a kod bez nich (używający składni strzałkowej) w 1 linii. W ten sposób ten sam kod może mieć różną liczbę linii w zależności od stylu programowania. Z punktu widzenia egzekucji funkcji, powyższe kody są równoznaczne.

W takich scenariuszach sięgnąć można po kolejne narzędzie - linter. może on wymusić na programiście konkretny styl programowania, a formater będzie mógł sformatować kod w jeden, spójny sposób. Wtedy liczba linii kodu będzie bardziej wiarygodna.

Ale czy to wystarczy? W momencie gdy kod zacznie robić coś przydatnego, dochodzimy do kolejnego problemu - paradygmatu programowania. Weźmy za przykład znowu język JavaScript. Niech tym razem funkcja zajmuje się przeprowadzaniem algorytmu sortowania przez wstawianie (insertion sort).
JavaScript jest językiem wieloparadygmatowym - można w nim pisać w paradygmacie delaratywnym i imperatywnym.
Rozwiązanie imperatywne może wyglądać tak:

```javascript
function insertionSortImperatively(numbers) {
	const result = [];
	for (let index1 = 0; index1 < numbers.length; index1 = index1 + 1) {
		const number = numbers[index1];
		let insertIndex = 0;
		for (let index2 = result.length - 1; index2 >= 0; index2 = index2 - 1) {
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
```

```javascript
function insertionSortDeclaratively(numbers) {
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
```

Oba te kody nie mutują wejściowej tablicy `numbers` i zwracają nową posortowaną tablicę. Oba są stabilne i oba mają tę samą złożoność obliczeniową O(n^2). Oba zostały przeformatowane tym samym formatterem z tymi samymi ustawieniami i oba spełniają te same reguły lintera. Można doszukać się różnic z rzeczywistym czasie działań poszczególnych instrukcji, ale z punktu widzenia złożoności obliczeniowej oba są równoznaczne. Oba mają podobną czytelność - nie skracają nazw zmiennych, nie używają skrótów, mają sensowne nazwy funkcji i zmiennych.

Tutaj już nie ma narzędzia, które pozwoliłoby nam wybrać, które zasugerowałoby pewne ustandaryzowanie kodu.
Okazuje się, że kod declaratywny jest krótszy - ma mniej linii kodu oraz mniej znaków.
Wykazuje to, że miara liczby linii kodu (lub liczby znaków) nie jest wiarygodna jeśli chodzi o porównanie tego, jak złożony jest dany program (te programy są tak samo złożone, ponieważ robią to samo i mają tę samą złożoność obliczeniową).

Rozwiązaniem tego problemu jest ograniczenie możliwych do wykorzystania konstrukcji do minimalnego zestawu. Można to zrobić idąc w 2 przeciwstawne końce spektrum:

- używając języka programowania bardzo niskiego poziomu, który jest wysoce imperatywny i implementuje bezpośrednio zestaw instrukcji oferowanych przez architekturę komputera (np. asembler)
- używając języka programowania bardzo wysokiego poziomu, który jest wysoce deklaratywny i odrzucił wiele konstrukcji imperatywnych (np. Prolog)

Ciekawsze jest drugie podejście - użycie języka bardzo wysokiego poziomu. Ostatecznie bezpośrednio lub pośrednio sprowadza się on i tak do języka niskiego poziomu.

Mimo tego, że nie ma w nim konstrukcji typowo imperatywnych to i tak występuje problem z możliwością zapisu tego samego kodu na różne sposoby. Zobaczmy to na przykładznie poniższych równoznacznych kodów:

      	bindSnippetProps(li, [
      		bindSnippetProps(
      			preCode,
      			`rodzic(ania, bartek) :- true.

rodzic(ania, celina) :- true.
`,
			),
		]),
		bindSnippetProps(li, [
			bindSnippetProps(
				preCode,
				`rodzic(X, Y) :-
X = ania,
Y = bartek.

rodzic(X, Y) :-
X = ania,
Y = celina.
`,

Niestety dla zachowania czytelności kodu, mówiąc w ogólności, nie jest możliw całkowita redukcja języka do minimalnego zestawu konstrukcji. Udowadniają to funkcje wieloparametrowe. Wiemy, o funkcji, że na pewno należy ona do minimalnego zestawu konstrukcji (patrz rachunek lambda). Ale dla programistów wygodne i czytelne przygotowanie jest funkcji, które mają wiele parametrów. pozwala to na szybkie ustalenie od jakich czynników zależy wynik funkcji. Jeśli dozwolone są higher order functions, to możliwe jest rozbicie funkcji wieloparametrowej na funkcje jednoargumentowe (currying). a jeśli nie są możliwe higher order functions to przykładem może być fakt, że dostatecznie skomplikowany kod będzie zawierać więcej niż jedną możliwą ścieżkę wykonania. Mając minimalny zestaw możliwych konstrukcji w języku, na pewno te ścieżki musiałyby być zapisane jako osobne funkcje. Wtedy jednak kod szybko staje się nieczytelny
