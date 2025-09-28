import {builtInFunctions} from "../../../../../../instances/built-in-functions/builtInFunctions.ts";
import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
export const interpreterChapter = [
	new H3AtomBuilder("Interpreter"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Implementując interpreter udało się skorzystać z wygodnego faktu, że do uruchomienia kodu źródłowego potrzebne jest drzewo składni abstrakcyjnej. Na to drzewo gotowe są przecież klasy. Do tych klas zostały dodane odpowiednie metody realizujące działania wymagane przy procesie interpretacji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Do pisania użytecznych kodów potrzebny jest pewien zestaw wbudowanych funkcji (lub w niektórych językach również operatorów). Język Belve nie wymusza istnienia żadnych wbudowanych funkcji. Implementacja interpretera ma więc pełną dowolność w tym zakresie. Zdecydowano się na:",
		),
	]),
	...Object.entries(builtInFunctions).map(([key, function_]) => {
		return new LiAtomBuilder({marginBlock: "1em 1em"}, [
			new PreAtomBuilder(
				{
					...basePreAtomStyles,
					display: "inline",
					fontSize: "1em",
					marginBlock: "0em 0em",
				},
				[new TextAtomBuilder(key)],
			),
		]);
	}),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Kolejną istotną rzeczą w interpreterze są wartości globalne – pewne nazwy zmiennych nie powinny być rozumiane jako zmienne użytkownika (programisty), ale jako globalne stałe. Na ten moment są to tylko liczby. Interpreter w swojej aktualnej postaci mając nazwę dostępnej zmiennej i chcąc poznać jej wartość, zagląda do mapowania nazwy zmiennej na jej wartość, a w przypadku braku takiego wpisu próbuje jeszcze sprawdzić czy nazwa zmiennej wygląda jak licza, a jesli tak, to konwertuje jej zapis tekstowy na liczbę i wykorzystuje.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
