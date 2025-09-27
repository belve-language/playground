import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class AssigningFunction extends BuiltInFunction {
	public constructor() {
		super("Assigns a value to an unknown.");
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [value] = knownsValues;
		const result = new ReturnFunctionCallingResult([value]);
		yield result;
	}
}
