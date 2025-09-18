import {factorialPreset} from "./presets/factorial/factorialPreset.ts";
import {fibonacciSequencePreset} from "./presets/fibonacci-sequence/fibonacciSequencePreset.ts";
import {insertionSortPreset} from "./presets/insertion-sort/insertionSortPreset.ts";
import {primalityTestPreset} from "./presets/primality-test/primalityTestPreset.ts";
import type {Preset} from "../../playground/preset/Preset.ts";
export const presets = [
	primalityTestPreset,
	insertionSortPreset,
	fibonacciSequencePreset,
	factorialPreset,
] as const satisfies readonly Preset[];
