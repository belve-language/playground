import type {Preset} from "../../../../playground/preset/Preset.ts";
export const factorialPreset = {
	name: "Factorial",
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
