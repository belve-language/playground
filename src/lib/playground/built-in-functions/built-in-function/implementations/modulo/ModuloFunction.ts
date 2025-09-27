import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class ModuloFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Computes the remainder of the division of the dividend by the divisor. It takes the sign of the dividend.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [dividend, divisor] = knownsValues;
		if (typeof dividend === "number" && typeof divisor === "number") {
			const result = new ReturnFunctionCallingResult([dividend % divisor]);
			yield result;
		}
	}
}
