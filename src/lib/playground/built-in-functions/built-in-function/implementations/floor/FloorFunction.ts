import type {Function} from "../../../../../belve/function/Function.ts";
import {ReturnFunctionCallingResult} from "../../../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../../../belve/non-main-functions/NonMainFunctions.ts";
import type {Value} from "../../../../value/Value.ts";
import {BuiltInFunction} from "../../BuiltInFunction.ts";
export class FloorFunction extends BuiltInFunction {
	public constructor() {
		super(
			"Rounds a number down to the nearest integer.",
			"Zaokrągla liczbę w dół do najbliższej liczby całkowitej.",
		);
	}
	public *call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly [Value],
	): Generator<ReturnFunctionCallingResult, void, void> {
		const [number] = knownsValues;
		if (typeof number === "number") {
			const result = new ReturnFunctionCallingResult([Math.floor(number)]);
			yield result;
		}
	}
}
