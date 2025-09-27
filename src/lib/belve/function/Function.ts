import type {SupportedFunctionCallingResult} from "../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {NonMainFunctions} from "../non-main-functions/NonMainFunctions.ts";
export interface Function {
	call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly unknown[],
	): Generator<SupportedFunctionCallingResult, void, void>;
}
