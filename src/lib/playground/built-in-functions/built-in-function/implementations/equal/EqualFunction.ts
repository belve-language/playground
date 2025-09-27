import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
import {checkIfValuesAreEqual} from "./checking-if-values-are-equal/checkIfValuesAreEqual.ts";
export class EqualFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Checks if two values are not equal. Pairs are considered not equal if they differ in their elements.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [value1, value2] = knownsValues;
		const areValuesEqual = checkIfValuesAreEqual(value1, value2);
		if (areValuesEqual) {
			const result = new ReturnFunctionCallingResult([]);
			yield result;
		}
	}
}
