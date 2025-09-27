import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class AdditionFunction extends BuiltInFunction {
	public constructor() {
		super("Performs the addition of two numbers.");
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		if (typeof number1 === "number" && typeof number2 === "number") {
			const result = new ReturnFunctionCallingResult([number1 + number2]);
			yield result;
		}
	}
}
