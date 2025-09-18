import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
export class AssigningFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [value] = knownsValues;
		const result = new ReturnFunctionCallingResult([value]);
		yield result;
	}
}
