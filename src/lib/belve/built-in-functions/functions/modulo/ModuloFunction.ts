import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {checkIfIsValidNumber} from "../../checking-if-is-valid-number/checkIfIsValidNumber.ts";
export class ModuloFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [dividend, divisor] = knownsValues;
		const isValue1Number = checkIfIsValidNumber(dividend);
		if (isValue1Number) {
			const isValue2Number = checkIfIsValidNumber(divisor);
			if (isValue2Number) {
				const result = new ReturnFunctionCallingResult([dividend % divisor]);
				yield result;
			}
		}
	}
}
