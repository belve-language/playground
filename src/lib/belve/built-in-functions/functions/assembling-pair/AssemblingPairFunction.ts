import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
export class AssemblingPairFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown, unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [firstElement, secondElement] = knownsValues;
		const result = new ReturnFunctionCallingResult([
			[firstElement, secondElement],
		]);
		yield result;
	}
}
