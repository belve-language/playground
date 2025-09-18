import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {checkIfIsValidNumber} from "../../checking-if-is-valid-number/checkIfIsValidNumber.ts";
export class PowerFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [base, exponent] = knownsValues;
		const isBaseNumber = checkIfIsValidNumber(base);
		if (isBaseNumber) {
			const isExponentNumber = checkIfIsValidNumber(exponent);
			if (isExponentNumber) {
				const result = new ReturnFunctionCallingResult([base ** exponent]);
				yield result;
			}
		}
	}
}
