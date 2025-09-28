import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class PowerFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Raises a base to the power of exponent.",
			"Podnosi podstawę do potęgi wykładnika.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [base, exponent] = knownsValues;
		if (typeof base === "number" && typeof exponent === "number") {
			const result = new ReturnFunctionCallingResult([base ** exponent]);
			yield result;
		}
	}
}
