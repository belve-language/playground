import {builtInFunctions} from "../../../instances/built-in-functions/builtInFunctions.ts";
import {presets} from "../../../instances/presets/presets.ts";
import {H2AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/2/H2AtomBuilder.ts";
import {H3AtomBuilder} from "../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import type {Preset} from "../../../playground/preset/Preset.ts";
import {State} from "../../../playground/state/State.ts";
import {basePreAtomStyles} from "../../base-pre-atom-styles/basePreAtomStyles.ts";
import {BelveCodeAtomBuilder} from "../../belve-code-atom-builder/BelveCodeAtomBuilder.ts";
export const implementacjePrzykladowychAlgorytmowChapter = [
	new H2AtomBuilder("Implementacje przykładowych algorytmów"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Poniżej przeddstawiono przykładowe implementacje wybranych algorytmów. Wykorzystywane w nich wbudowane funkcje pokrywają się tymi, opisanymi w rozdziale o interpreterze. Należy założyć, że w środowisku wykonującym dostępne są globalne zmienne reprezentujące wymienione w kodach źródłowych liczby.",
		),
	]),
	...presets.flatMap((preset: Preset): readonly SupportedAtomBuilder[] => {
		return [
			new H3AtomBuilder(preset.nameInPolish),
			new PAtomBuilder({marginBlock: "1em 1em"}, [
				new TextAtomBuilder(preset.descriptionInPolish),
			]),
			new PreAtomBuilder(
				{
					...basePreAtomStyles,
					display: "block",
					fontSize: "1em",
					marginBlock: "1em 1em",
				},
				[
					new BelveCodeAtomBuilder(
						State.create(builtInFunctions, preset.sourceCode.split("")),
					),
				],
			),
		];
	}),
] as const satisfies readonly SupportedAtomBuilder[];
