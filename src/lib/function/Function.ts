import type {SupportedFunctionCallingResult} from "../function-calling-result/supported/SupportedFunctionCallingResult.ts";
import type {Functions} from "../functions/Functions.ts";
export interface Function {
	call(
		functions: Functions,
		knownsValues: readonly unknown[],
	): Generator<SupportedFunctionCallingResult, void, void>;
}
