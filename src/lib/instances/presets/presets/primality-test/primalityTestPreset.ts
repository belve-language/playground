import type {Preset} from "../../../../playground/preset/Preset.ts";
export const primalityTestPreset = {
	name: "Primality test",
	sourceCode: `is (dividend) not divisible by (divisor) {
	(dividend) % (divisor) = [remainder],
	(remainder) != (0)
}

is (number) prime {
	(number) > (1),
	(number) ^ (0.5) = [maximal divisor to check],
	none of the integers between (2) and (maximal divisor to check) divide (number)
}

none of the integers between (start) and (end) divide (dividend) {
	(start) > (end).
	(start) <= (end),
	is (dividend) not divisible by (start),
	(start) + (1) = [next start],
	none of the integers between (next start) and (end) divide (dividend)
}

{
	is (11) prime
}
`,
} as const satisfies Preset;
