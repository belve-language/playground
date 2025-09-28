import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class IsPairFunction extends BuiltInFunction {
	public constructor() {
		super("Checks if a value is a pair.", "Sprawdza, czy wartość jest parą.");
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [pair] = knownsValues;
		if (typeof pair === "object") {
			const result = new ReturnFunctionCallingResult([]);
			yield result;
		}
	}
}
