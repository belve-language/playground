import type {Preset} from "../../../../playground/preset/Preset.ts";
export const factorialPreset = {
	descriptionInPolish:
		"Silnia liczby naturalnej n to iloczyn wszystkich liczb naturalnych od 1 do n.",
	name: "Factorial",
	nameInPolish: "Silnia",
	sourceCode: `fact (n) (a) {
	(n) + (1) = [next n],
	(a) * (n) = [next a],
	fact (next n) (next a)
}

{
	fact (1) (1)
}
`,
} as const satisfies Preset;
