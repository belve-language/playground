import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {checkIfIsValidNumber} from "../../checking-if-is-valid-number/checkIfIsValidNumber.ts";
export class AdditionFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number1, number2] = knownsValues;
		const isNumber1Valid = checkIfIsValidNumber(number1);
		if (isNumber1Valid) {
			const isNumber2Valid = checkIfIsValidNumber(number2);
			if (isNumber2Valid) {
				const result = new ReturnFunctionCallingResult([number1 + number2]);
				yield result;
			}
		}
	}
}
