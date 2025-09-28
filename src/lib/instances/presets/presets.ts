import {factorialPreset} from "./presets/factorial/factorialPreset.ts";
import {fibonacciSequencePreset} from "./presets/fibonacci-sequence/fibonacciSequencePreset.ts";
import {primalityTestPreset} from "./presets/primality-test/primalityTestPreset.ts";
import {selectionSortPreset} from "./presets/selection-sort/selectionSortPreset.ts";
import type {Preset} from "../../playground/preset/Preset.ts";
export const presets = [
	fibonacciSequencePreset,
	factorialPreset,
	primalityTestPreset,
	selectionSortPreset,
] as const satisfies readonly Preset[];
