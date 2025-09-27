import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class AssemblingPairFunction extends BuiltInFunction {
	public constructor() {
		super("Aassembles a pair from two values.");
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value, Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [firstElement, secondElement] = knownsValues;
		const result = new ReturnFunctionCallingResult([
			[firstElement, secondElement],
		]);
		yield result;
	}
}
