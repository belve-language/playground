import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class DisassemblingPairFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Disassembles a pair into its two elements.",
			"Rozkłada parę na jej dwa elementy.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [pair] = knownsValues;
		if (typeof pair === "object") {
			const [firstElement, secondElement] = pair;
			const result = new ReturnFunctionCallingResult([
				firstElement,
				secondElement,
			]);
			yield result;
		}
	}
}
