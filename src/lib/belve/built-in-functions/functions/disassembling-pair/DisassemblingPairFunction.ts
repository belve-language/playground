import type {Function} from "../../../function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
export class DisassemblingPairFunction implements Function {
	public constructor() {}
	public *call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly [unknown],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [pair] = knownsValues;
		const isArray = Array.isArray(pair);
		if (isArray) {
			const [firstElement, secondElement, ...restElements] = pair;
			if (restElements.length === 0) {
				const result = new ReturnFunctionCallingResult([
					firstElement,
					secondElement,
				]);
				yield result;
			}
		}
	}
}
