import type {Preset} from "../../../../playground/preset/Preset.ts";
export const fibonacciSequencePreset = {
	descriptionInPolish:
		"Ciąg Fibonacciego to ciąg liczb, w którym każda liczba jest sumą dwóch poprzednich. Ciąg zaczyna się od 0 i 1.",
	name: "Fibonacci sequence",
	nameInPolish: "Ciąg Fibonacciego",
	sourceCode: `fib (a) (b) {
	(a) + (b) = [next-b],
	fib (b) (next-b)
}

{
	fib (0) (1)
}
`,
} as const satisfies Preset;
