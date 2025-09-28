import {H3AtomBuilder} from "../../../../../../pages/atom-builder/implementations/chapter-heading/implementations/h/implementations/3/H3AtomBuilder.ts";
import {TextAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/text/TextAtomBuilder.ts";
import {PAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/p/PAtomBuilder.ts";
import {PreAtomBuilder} from "../../../../../../pages/atom-builder/implementations/non-chapter-heading/implementations/with-children/implementations/pre/PreAtomBuilder.ts";
import type {SupportedAtomBuilder} from "../../../../../../pages/atom-builder/supported/SupportedAtomBuilder.ts";
import {basePreAtomStyles} from "../../../../../base-pre-atom-styles/basePreAtomStyles.ts";
export const abstraktyfikatorChapter = [
	new H3AtomBuilder("Abstraktyfikator"),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Niektóre z klas węzłów drzewa składni konkretnej posiadają metodę umożliwiającą ich abstraktyfikację. Metod tych nie posiadają klasy reprezentujące nawiasy i znaki białe. Nie uczestniczą one w procesie abstraktyfikacji.",
		),
	]),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Mimo udanego parsowania, może się wydarzyć, że abstraktyfikacja nie powiedzie się. Dzieje się tak, ponieważ gramatyka języka została opracowana w sposób wybaczający – poprawia to komfort pisania kodu nie męcząć programisty ciągłymi komunikatami o błędach składniowych. Przykładowo rozważmy następujący kod źródłowy:",
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
			new TextAtomBuilder(`is () prime {
	() > (1),
	() ^ (0.5) = [],
	none of the integers between (2) and () divide ()
}
`),
		],
	),
	new PAtomBuilder({marginBlock: "1em 1em"}, [
		new TextAtomBuilder(
			"Oczywiście brakuje w nim nazw zmiennych. Taki kod jest niemożliwy do wykonania, ale uznanie go za błędny składniowo byłoby zbyt restrykcyjne. Programista mógłby chcieć skorzystać z możliwości automatycznego formatowania kodu. Wymagane do tego jest zbudowanie poprawnego drzewa składni konkretnej.",
		),
	]),
] as const satisfies readonly SupportedAtomBuilder[];
