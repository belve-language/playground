import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {BrAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/br/BrAtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {CodeAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/code/CodeAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {StrongAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/strong/StrongAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
export const linterChapter = [
	new H3AtomBuilder("Linter"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Lintowanie odbywa się na podstawie drzewa składni abstrakcyjnej.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Mimo prostoty języka jest w nim kilka istotnych wzorców, których należy unikać. Da się je łatwo wykryć automatycznie i właśnie to robi linter. Te wzorce to:",
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([new TextAtomBuilder("Zbędne instrukcje bloku")]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Instrukcje bloku, w których jedyną instrukcją jest instrukcja bloku, powinny zostać uproszczone poprzez usunięcie zbędnego poziomu zagnieżdżenia. Przykładowo:",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "1em 1em",
			},
			[
				new CodeAtomBuilder([
					new TextAtomBuilder(`is (dividend) not divisible by (divisor) {
	{
		(dividend) % (divisor) = [remainder],
		(remainder) != (0)
	}
}
`),
				]),
			],
		),
		new TextAtomBuilder("powinno zostać zmienione na:"),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "1em 1em",
			},
			[
				new CodeAtomBuilder([
					new TextAtomBuilder(`is (dividend) not divisible by (divisor) {
	(dividend) % (divisor) = [remainder],
	(remainder) != (0)
}
`),
				]),
			],
		),
	]),
	new LiAtomBuilder({marginBlock: "1em 1em"}, [
		new StrongAtomBuilder([
			new TextAtomBuilder(
				"Zduplikowane instrukcje na tej samej ścieżce wykonywania",
			),
		]),
		new BrAtomBuilder(),
		new TextAtomBuilder(
			"Wykryte zduplikowane instrukcje powinny zostać usunięte, ale tylko, jeśli wiadomo o tych instrukcjach, że nie mają efektów ubocznych. Przykładowo:",
		),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "block",
				fontSize: "1em",
				marginBlock: "1em 1em",
			},
			[
				new CodeAtomBuilder([
					new TextAtomBuilder(`is (number) even {
	(number) % (2) = [remainder],
	(remainder) = (0),
	(number) % (2) = [remainder]
}
`),
				]),
			],
		),
		new TextAtomBuilder(
			"W tym wypadku można pozbyć się tylko drugiego wystąpienia instrukcji. Pierwsze jest potrzebne innej instrukcji. Czasem nie ma znaczenia, które z wystąpień zostanie usunięte.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
