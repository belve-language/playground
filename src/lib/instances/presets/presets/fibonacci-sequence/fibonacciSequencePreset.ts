import type {Preset} from "../../../../playground/preset/Preset.ts";
export const fibonacciSequencePreset = {
	name: "Fibonacci sequence",
	sourceCode: `fib (a) (b) {
	(b) + (a) = [next-b],
	fib (b) (next-b)
}

{
	fib (0) (1)
}
`,
} as const satisfies Preset;
