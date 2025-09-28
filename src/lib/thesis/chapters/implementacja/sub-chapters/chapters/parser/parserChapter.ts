import {parser} from "../../../../../../instances/parser/parser.ts";
import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {H4AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/4/H4AtomBuilder.ts";
import {BrAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/br/BrAtomBuilder.ts";
import {SourceAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/source/SourceAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {StrongAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/strong/StrongAtomBuilder.ts";
import {TableAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/table/TableAtomBuilder.ts";
import {TbodyAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/tbody/TbodyAtomBuilder.ts";
import {TdAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/td/TdAtomBuilder.ts";
import {ThAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/th/ThAtomBuilder.ts";
import {TheadAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/thead/TheadAtomBuilder.ts";
import {TrAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/tr/TrAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {BookSource} from "../../../../../../pages/source/Source.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
import {checkIfRuleIsInteresting} from "../../../../../checking-if-rule-is-interesting/checkIfRuleIsInteresting.ts";
// TODO refactor
const interestingCharacters = [
	" ",
	"(",
	")",
	",",
	"[",
	"]",
	"a",
	"{",
	"}",
] as const satisfies readonly string[];
export const parserChapter = [
	new H3AtomBuilder("Parser"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Parser nie został zaimplementowany ręcznie. Mimo że język Belve jest stosunkowo prosty, wygodniejsze było wykorzystanie techniki generowania parsera na podstawie gramatyki kompatybilnej z ",
		),
		new SourceAtomBuilder(
			"parserami klasy LL(1)",
			new BookSource(
				"Alfred V. Aho, Monica S. Lam, Ravi Sethi, and Jeffrey D. Ullman",
				new Date("2006-08-31"),
				"Pearson Education, Inc",
				"Compilers: Principles, Techniques, and Tools (2nd Edition)",
			),
		),
		new TextAtomBuilder(
			". Parser używany w systemie należy właśnie do tej klasy.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Na poziomie kodu źródłowego implementacja wygląda następująco:",
		),
	]),
	new H4AtomBuilder("Reguły"),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W kodzie zaimplementowana jest abstrakcyjna klasa reprezentująca pojedynczą regułę gramatyki. Klasa ta wymusza przechowywanie symbolu nieterminala będącego lewą stroną reguły oraz symboli tworzących jej rozwinięcie.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Każda reguła gramatyki jest reprezentowana przez klasę dziedziczącą po tej klasie abstrakcyjnej.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Obsługiwane są wyłącznie reguły w postaci: <nieterminal> ::= <rozwinięcie₁> | <rozwinięcie₂> | ... , gdzie <rozwinięcie> to terminal, nieterminal lub ich konkatenacja z dalszym rozwinięciem.",
		),
	]),
	new H4AtomBuilder("Gramatyka"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Żeby zbudować parser, potrzebne jest ustalenie zbiorów FIRST i FOLLOW dla wszystkich reguł gramatyki. Zbiór FIRST określa, które terminale mogą pojawić się na początku rozwinięcia danej reguły, uwzględniając również możliwość wyprowadzenia pustego słowa (oznaczany w tej pracy jako "ε"). Z kolei zbiór FOLLOW wskazuje, które terminale mogą bezpośrednio wystąpić po danej regule w dowolnym poprawnym rozwinięciu, łącznie ze specjalnym symbolem końca wejścia (oznaczany w tej pracy jako "$").`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Gotowe reguły są umieszczane w zbiorze, który — wraz ze wskazaniem reguły początkowej — służy do utworzenia instancji klasy reprezentującej całą gramatykę. Klasa ta realizuje operacje wymagające znajomości wszystkich reguł, w tym:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Sprawdzanie, czy reguła może występować w pozycji końcowej w rozwinięciu.",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Informacja ta jest wykorzystywana przy obliczaniu zbiorów FOLLOW.",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Wyznaczanie możliwych początkowych terminali rozwinięć danej reguły.",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Informacja ta jest używana przy obliczaniu zbiorów FIRST.",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Wyznaczanie terminali następujących po danej regule w rozwinięciach.",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder("Proces ten przebiega następująco:"),
		new LiAtomBuilder({marginBlock: "1em 1em"}, [
			new TextAtomBuilder(
				"Jeżeli analizowana reguła jest regułą początkową, nie ma ona żadnych następujących terminali.",
			),
		]),
		// TODO: Should be 1em
		new LiAtomBuilder({marginBlock: "1em 0em"}, [
			new TextAtomBuilder(
				"W przeciwnym wypadku obliczenia rozpoczyna się od reguły początkowej, przeglądając rozwinięcia kolejnych reguł i wyszukując konkatenacje symboli. Jeżeli okaże się, że w danej konkatenacji lewa część może występować w pozycji końcowej, do zbioru FOLLOW dodawane są terminale będące możliwymi symbolami początkowymi prawej strony rozwinięcia.",
			),
		]),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Obliczanie zbiorów FIRST")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Poniżej przydstawiono tabelę zbiorów FIRST dla wybranych reguł:`,
		),
		new BrAtomBuilder(),
		new TableAtomBuilder([
			new TheadAtomBuilder([
				new TrAtomBuilder([
					new ThAtomBuilder([new TextAtomBuilder("Reguła ⟍ Znak")]),
					...interestingCharacters.map((character) => {
						return new ThAtomBuilder([
							new PreAtomBuilder(
								{
									...basePreAtomStyles,
									backgroundColor: "transparent",
									display: "inline",
									fontSize: "1em",
									marginBlock: "0em 0em",
								},
								[new TextAtomBuilder(JSON.stringify(character))],
							),
						]);
					}),
					new ThAtomBuilder([
						new PreAtomBuilder(
							{
								...basePreAtomStyles,
								backgroundColor: "transparent",
								display: "inline",
								fontSize: "1em",
								marginBlock: "0em 0em",
							},
							[new TextAtomBuilder(" ε ")],
						),
					]),
				]),
			]),
			new TbodyAtomBuilder([
				...Array.from(
					new Set(
						Array.from(
							parser.grammar.startingRule.iterateWithDepth(
								new Set(),
								0,
								parser.grammar.ruleById,
							),
						)
							.toSorted((result1, result2) => {
								return result1.depth - result2.depth;
							})
							.map((result) => {
								return result.rule;
							}),
					),
				)
					.filter((rule) => {
						const isRuleInteresting =
							checkIfRuleIsInteresting(rule)
							&& (rule.name === "opcjonalny kod źródłowy"
								|| !rule.name.includes("opcjonaln"));
						return isRuleInteresting;
					})
					.map((rule) => {
						const firstSet = rule
							.getRightExpressions(parser.grammar.ruleById)
							.map((expr) => expr.computeFirstSet(parser.grammar.ruleById))
							.reduce(
								(acc, set) => {
									return {
										canBeEmpty: acc.canBeEmpty || set.canBeEmpty,
										terminals: new Set(acc.terminals.union(set.terminals)),
									};
								},
								{canBeEmpty: false, terminals: new Set<string>()},
							);
						return new TrAtomBuilder([
							new ThAtomBuilder([new TextAtomBuilder(rule.name)]),
							...interestingCharacters.map((character) => {
								return new TdAtomBuilder([
									new PreAtomBuilder(
										{
											...basePreAtomStyles,
											backgroundColor: "transparent",
											display: "inline",
											fontSize: "1em",
											marginBlock: "0em 0em",
										},
										[
											new PreAtomBuilder(
												{
													...basePreAtomStyles,
													backgroundColor: "transparent",
													display: "inline",
													fontSize: "1em",
													marginBlock: "0em 0em",
												},
												[
													new TextAtomBuilder(
														firstSet.terminals.has(character) ? "✔" : "",
													),
												],
											),
										],
									),
								]);
							}),
							new TdAtomBuilder([
								new PreAtomBuilder(
									{
										...basePreAtomStyles,
										backgroundColor: "transparent",
										display: "inline",
										fontSize: "1em",
										marginBlock: "0em 0em",
									},
									[
										new PreAtomBuilder(
											{
												...basePreAtomStyles,
												backgroundColor: "transparent",
												display: "inline",
												fontSize: "1em",
												marginBlock: "0em 0em",
											},
											[new TextAtomBuilder(firstSet.canBeEmpty ? "✔" : "")],
										),
									],
								),
							]),
						]);
					}),
			]),
		]),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Obliczanie zbiorów FOLLOW")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			`Poniżej przydstawiono tabelę zbiorów FOLLOW dla wybranych reguł:`,
		),
		new BrAtomBuilder(),
		new TableAtomBuilder([
			new TheadAtomBuilder([
				new TrAtomBuilder([
					new ThAtomBuilder([new TextAtomBuilder("Reguła ⟍ Znak")]),
					...interestingCharacters.map((character) => {
						return new ThAtomBuilder([
							new PreAtomBuilder(
								{
									...basePreAtomStyles,
									backgroundColor: "transparent",
									display: "inline",
									fontSize: "1em",
									marginBlock: "0em 0em",
								},
								[new TextAtomBuilder(JSON.stringify(character))],
							),
						]);
					}),
					new ThAtomBuilder([
						new PreAtomBuilder(
							{
								...basePreAtomStyles,
								backgroundColor: "transparent",
								display: "inline",
								fontSize: "1em",
								marginBlock: "0em 0em",
							},
							[new TextAtomBuilder(" $ ")],
						),
					]),
				]),
			]),
			new TbodyAtomBuilder([
				...Array.from(
					new Set(
						Array.from(
							parser.grammar.startingRule.iterateWithDepth(
								new Set(),
								0,
								parser.grammar.ruleById,
							),
						)
							.toSorted((result1, result2) => {
								return result1.depth - result2.depth;
							})
							.map((result) => {
								return result.rule;
							}),
					),
				)
					.filter((rule) => {
						const isRuleInteresting =
							checkIfRuleIsInteresting(rule)
							&& (rule.name === "opcjonalny kod źródłowy"
								|| !rule.name.includes("opcjonaln"));
						return isRuleInteresting;
					})
					.map((rule) => {
						const followSet = parser.grammar.computeRuleFollowSet(rule);
						return new TrAtomBuilder([
							new ThAtomBuilder([new TextAtomBuilder(rule.name)]),
							...interestingCharacters.map((character) => {
								return new TdAtomBuilder([
									new PreAtomBuilder(
										{
											...basePreAtomStyles,
											backgroundColor: "transparent",
											display: "inline",
											fontSize: "1em",
											marginBlock: "0em 0em",
										},
										[
											new TextAtomBuilder(
												followSet.terminals.has(character) ? "✔" : "",
											),
										],
									),
								]);
							}),
							new TdAtomBuilder([
								new PreAtomBuilder(
									{
										...basePreAtomStyles,
										backgroundColor: "transparent",
										display: "inline",
										fontSize: "1em",
										marginBlock: "0em 0em",
									},
									[new TextAtomBuilder(followSet.canBeFinal ? "✔" : "")],
								),
							]),
						]);
					}),
			]),
		]),
	]),
	new H4AtomBuilder("Parser"),
	// i want to put here the following:
	// Na podstawie zdefiniowanej gramatyki tworzona jest instancja klasy reprezentującej parser. W jej konstruktorze budowana jest pomocnicza struktura danych – tablica parsowania – która pozwala szybko zdecydować, którą regułę należy zastosować w danym momencie analizy.
	// Tablica parsowania mapuje pary (nieterminal, terminal) na odpowiednie produkcje gramatyki. Dzięki niej parser, patrząc na symbol na szczycie stosu i bieżący symbol wejściowy, może natychmiast wybrać właściwą produkcję.
	// Tablica ta powstaje w oparciu o zbiory FIRST i FOLLOW. Dla każdej produkcji i każdego terminala należącego do jej zbioru FIRST do tablicy dodawany jest wpis wskazujący na tę produkcję. Jeśli produkcja może wyprowadzić pusty ciąg, do tablicy dodawane są także wpisy dla wszystkich terminali ze zbioru FOLLOW odpowiadającej reguły.
	// Podczas parsowania parser utrzymuje stos oczekiwanych symboli (nieterminali i terminali). Na początku na stosie znajduje się wyłącznie symbol startowy gramatyki. Algorytm działa iteracyjnie, porównując symbol ze szczytu stosu z bieżącym symbolem wejścia:
	// Jeśli na szczycie stosu znajduje się terminal zgodny z bieżącym symbolem wejścia, parser usuwa go ze stosu, „zużywa” ten symbol wejścia i przechodzi dalej.
	// Jeśli terminal nie pasuje do symbolu wejścia, parser zgłasza błąd składniowy – oznacza to, że w kodzie brakuje oczekiwanego symbolu.
	// Jeśli na szczycie stosu jest nieterminal, parser sprawdza tablicę parsowania, aby znaleźć odpowiednią produkcję. Jeśli taka istnieje, usuwa nieterminal ze stosu i wstawia na niego symbole rozwinięcia w odwrotnej kolejności (tak, aby pierwszy symbol znalazł się na górze).
	// Jeśli w tablicy brak wpisu dla pary (nieterminal, terminal), parser zgłasza błąd – nie istnieje reguła pozwalająca dopasować aktualny symbol wejścia.
	// Proces powtarza się, aż stos stanie się pusty lub wystąpi błąd.
	// Jeżeli stos jest pusty i całe wejście zostało przetworzone, kod uznaje się za poprawny składniowo.
	// Jeżeli stos jest pusty, ale na wejściu pozostały jeszcze symbole, parser zgłasza błąd – końcówka kodu nie pasuje do żadnej reguły.
	// W przypadku błędu parser zwraca informację o jego rodzaju i dokładnym miejscu w kodzie źródłowym, co ułatwia diagnozę problemu.
	// Jeżeli parsowanie zakończy się pomyślnie, parser zwraca drzewo składni konkretnej (CST – Concrete Syntax Tree), które odzwierciedla strukturę kodu zgodnie z gramatyką. Węzły drzewa odpowiadają zastosowanym produkcjom, a liście – terminalom z wejścia.
	// Poniżej przedstawiono fragment tablicy parsowania dla wybranych reguł:
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Na podstawie zdefiniowanej gramatyki tworzona jest instancja klasy reprezentującej parser. Budowana jest w trakcie pomocnicza struktura danych – tablica parsowania – która pozwala szybko zdecydować, którą regułę należy zastosować w danym momencie analizy.`,
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Tablica parsowania to struktura mapująca pary (nieterminal, terminal) na wyrażenia (produkcje) gramatyki. Na jej podstawie parser może zdecydować, które wyrażenie zastosować dla danej reguły przy napotkaniu określonego terminala wejściowego.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Tablica parsowania jest budowana na podstawie zbiorów FIRST i FOLLOW. Dla każdej produkcji reguły i każdego terminala z jej zbioru FIRST, w tablicy umieszcza się parę (reguła, terminal) wskazującą na tę produkcję. Jeżeli produkcja może wyprowadzić puste słowo, wstawia się również pary dla terminali ze zbioru FOLLOW reguły.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Podczas parsowania wywoływana jest odpowiednia metoda na regule, według której przebiega aktualnie parsowanie. Reguła na podstawie bieżącego terminala wejściowego wybiera odpowiednie wyrażenie z tablicy parsowania i deleguje mu dalsze parsowanie. Wynik parsowania wyrażenia decyduje o tym, czy można zbudować węzeł drzewa składni konkretnej dla tej reguły.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jeżeli w tablicy parsowania brak jest produkcji dla pary (reguła, terminal), parser zgłasza błąd składniowy – napotkany terminal nie może rozpocząć żadnej produkcji tej reguły.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jeżeli parsowanie wyrażenia powiedzie się, reguła buduje węzeł drzewa składni konkretnej, zapamiętuje nowy indeks w strumieniu wejściowym oraz pozostałe znaki, i zwraca wynik parsowania wyższej warstwie wywołania.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jeżeli parsowanie wyrażenia się nie powiedzie, reguła zwraca błąd z informacją o miejscu w kodzie, w którym wystąpił problem.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Proces ten odbywa się rekurencyjnie: reguły wywołują swoje wyrażenia, te z kolei inne reguły lub terminale, aż do momentu, gdy całe wejście zostanie przetworzone lub wystąpi błąd.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Jeżeli całe wejście zostanie przetworzone bez błędów, zwracane jest drzewo składni konkretnej, którego korzeniem jest reguła startowa. Każdy węzeł odpowiada regule.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W przypadku błędu parser zwraca informację o błędzie, zawierającą jego opis i pozycję w kodzie, w której błąd został wykryty.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			`Poniżej przedstawiono fragment tablicy parsowania dla wybranych reguł:`,
		),
	]),
	new TableAtomBuilder([
		new TheadAtomBuilder([
			new TrAtomBuilder([
				new ThAtomBuilder([new TextAtomBuilder("Reguła ⟍ Znak")]),
				...interestingCharacters
					.filter((character) => {
						return (
							character !== "["
							&& character !== "]"
							&& character !== "}"
							&& character !== ","
							&& character !== ")"
						);
					})
					.map((character) => {
						return new ThAtomBuilder([
							new PreAtomBuilder(
								{
									...basePreAtomStyles,
									backgroundColor: "transparent",
									display: "inline",
									fontSize: "1em",
									marginBlock: "0em 0em",
								},
								[new TextAtomBuilder(JSON.stringify(character))],
							),
						]);
					}),
				new ThAtomBuilder([
					new PreAtomBuilder(
						{
							...basePreAtomStyles,
							backgroundColor: "transparent",
							display: "inline",
							fontSize: "1em",
							marginBlock: "0em 0em",
						},
						[new TextAtomBuilder(" $ ")],
					),
				]),
			]),
		]),
		new TbodyAtomBuilder([
			...Array.from(
				new Set(
					Array.from(
						parser.grammar.startingRule.iterateWithDepth(
							new Set(),
							0,
							parser.grammar.ruleById,
						),
					)
						.toSorted((result1, result2) => {
							return result1.depth - result2.depth;
						})
						.map((result) => {
							return result.rule;
						}),
				),
			)
				.filter((rule) => {
					const isRuleInteresting =
						checkIfRuleIsInteresting(rule)
						&& !rule.name.includes("segment")
						&& !rule.name.includes("operator")
						&& !rule.name.includes("wywoła")
						&& rule.name !== "nic"
						&& !rule.name.includes("słow")
						&& !rule.name.includes("przestrzeń")
						&& !rule.name.includes("nazwa zmiennej")
						&& !rule.name.includes("nazwy zmiennej")
						&& (rule.name === "opcjonalny kod źródłowy"
							|| !rule.name.includes("opcjonaln"))
						&& !rule
							.getRightExpressions(parser.grammar.ruleById)
							.some((expression) => {
								return expression
									.stringifyToBackusNaurForm()
									.join(" ")
									.includes("operator");
							});
					return isRuleInteresting;
				})
				.map((rule) => {
					const row = parser.parsingTable.get(rule);
					if (row === undefined) {
						throw new Error(
							`Brak wiersza tablicy parsowania dla reguły ${rule.name}.`,
						);
					}
					return new TrAtomBuilder([
						new ThAtomBuilder([new TextAtomBuilder(rule.name)]),
						...interestingCharacters
							.filter((character) => {
								return (
									character !== "["
									&& character !== "]"
									&& character !== "}"
									&& character !== ","
									&& character !== ")"
								);
							})
							.map((character) => {
								const production = row?.terminals[character];
								return new TdAtomBuilder([
									new TextAtomBuilder(
										production === undefined ? "" : (
											production.stringifyToBackusNaurForm().join(" ")
										),
									),
								]);
							}),
						new TdAtomBuilder([
							new TextAtomBuilder(
								row.finalization === null ?
									""
								:	row.finalization.stringifyToBackusNaurForm().join(" "),
							),
						]),
					]);
				}),
		]),
	]),
	new H4AtomBuilder("Drzewo składni konkretnej"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Każda klasa reprezentująca regułę gramatyki powiązana jest z klasą reprezentującą węzeł drzewa składni konkretnej. Kiedy parserowi uda się dopasować regułę do fragmentu kodu źródłowego, tworzy on instancję powiązanego z nią węzła i dodaje ją do drzewa składni konkretnej.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Instancje klasy węzła drzewa składni konkretnej przechowują informację o ich zakresie w kodzie źródłowym.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Konkretniej mówiąc jest to indeks początkowy oraz indeks końcowy (nie włączając go). Wynika to z faktu, że przykładowy pusty kod źródłowy też musi dać się sparsować do węzła. Jego indeks początkowy i końcowy to jest 0.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
