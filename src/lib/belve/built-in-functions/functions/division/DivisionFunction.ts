import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {checkIfIsValidNumber} from "../../checking-if-is-valid-number/checkIfIsValidNumber.ts";
export class DivisionFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [dividend, divisor] = knownsValues;
		const isDividendNumber = checkIfIsValidNumber(dividend);
		if (isDividendNumber) {
			const isDivisorNumber = checkIfIsValidNumber(divisor);
			if (isDivisorNumber) {
				const result = new ReturnFunctionCallingResult([dividend / divisor]);
				yield result;
			}
		}
	}
}
