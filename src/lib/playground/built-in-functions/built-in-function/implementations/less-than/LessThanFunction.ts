import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class LessThanFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Checks if the first number is less than the second number.",
			"Sprawdza, czy pierwsza liczba jest mniejsza od drugiej liczby.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		if (
			typeof number1 === "number"
			&& typeof number2 === "number"
			&& number1 < number2
		) {
			const result = new ReturnFunctionCallingResult([]);
			yield result;
		}
	}
}
