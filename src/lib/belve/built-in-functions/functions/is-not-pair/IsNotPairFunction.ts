import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
export class IsNotPairFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [notPair] = knownsValues;
		const isArray = Array.isArray(notPair);
		if (!isArray || notPair.length !== 2) {
			const result = new ReturnFunctionCallingResult([]);
			yield result;
		}
	}
}
