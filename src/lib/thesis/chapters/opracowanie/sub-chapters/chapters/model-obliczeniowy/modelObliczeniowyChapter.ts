import {modelObliczeniowyChapterSubChapters} from "./sub-chapters/modelObliczeniowyChapterSubChapters.ts";
import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {LiAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/li/LiAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import {StrongAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/strong/StrongAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
export const modelObliczeniowyChapter = [
	new H3AtomBuilder("Model obliczeniowy"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"W tym rozdziale przedstawiono formalny opis tego, jak wykonywany jest program napisany w języku Belve. Można rozdzielić go na kilka współpracujących ze sobą komponentów, których wykonywanie zostanie omówione w podrozdziałach.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Uwzględnić należy pewien zbiór funkcji wbudowanych, które są dostępne bez definiowania ich.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Należy wprowadzić też nowe pojęcie – postać pozycyjną zmiennych. Zmienne przekazywane między instrukcją wywołania funkcji a funkcją wywoływaną nie mogą być identyfikowane poprzez nazwy, ponieważ mogą się one różnić. Przykładowo, zakładając istnienie funkcji z nagłówkiem ",
		),
		// TODO: REFACTOR such instances. no pre should be inside p
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0 0",
			},
			[new TextAtomBuilder(`age of (user) is [age] and their name is [name]`)],
		),
		new TextAtomBuilder(", wywołanie tej funkcji może wyglądać następująco: "),
		new PreAtomBuilder(
			{
				...basePreAtomStyles,
				display: "inline",
				fontSize: "1em",
				marginBlock: "0 0",
			},
			[
				new TextAtomBuilder(
					`age of (me) is [my age] and their name is [my name]`,
				),
			],
		),
		new TextAtomBuilder(
			". Zmienne (zarówno znane, jak i nieznane) muszą być przekazywane na podstawie ich pozycji. Odpowiednio:",
		),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new StrongAtomBuilder([new TextAtomBuilder("Dla znanych:")]),
			new TextAtomBuilder(
				" na podstawie kolejności występowania w instrukcji wywołania funkcji;",
			),
		]),
		new LiAtomBuilder({marginBlock: "0em 0em"}, [
			new StrongAtomBuilder([new TextAtomBuilder("Dla nieznanych:")]),
			new TextAtomBuilder(
				" na podstawie kolejności występowania w nagłówku funkcji;",
			),
		]),
		new TextAtomBuilder(
			"Po otrzymaniu zmiennych w postaci pozycyjnej trzeba je zamienić na postać nazwową (ponownie powiązać z nazwami).",
		),
	]),
	...modelObliczeniowyChapterSubChapters,
] as const satisfies readonly SupportedAtomBuilder[];
