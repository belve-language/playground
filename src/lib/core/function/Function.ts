import type {SupportedFunctionCallingResult} from "../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {Functions} from "../non-main-functions/NonMainFunctions.ts";
export interface Function {
	call(
		nonMainFunctions: NonMainFunctions,
		knownsValues: readonly unknown[],
	): Generator<SupportedFunctionCallingResult, void, void>;
}
