import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class DivisionFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Divides one number by another number.",
			"Dzieli jedną liczbę przez drugą liczbę.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [dividend, divisor] = knownsValues;
		if (typeof dividend === "number" && typeof divisor === "number") {
			const result = new ReturnFunctionCallingResult([dividend / divisor]);
			yield result;
		}
	}
}
