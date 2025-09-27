import type {Function} from "../../../belve/function/Function.ts";
import type {ReturnFunctionCallingResult} from "../../../belve/function-calling-result/implementations/return/ReturnFunctionCallingResult.ts";
import type {NonMainFunctions} from "../../../belve/non-main-functions/NonMainFunctions.ts";
export abstract class BuiltInFunction implements Function {
	protected constructor(description: string) {
		this.description = description;
	}
	public abstract call(
		nonMainFunctions: NonMainFunctions<Function>,
		knownsValues: readonly unknown[],
	): Generator<ReturnFunctionCallingResult, void, void>;
	protected readonly description: string;
}
