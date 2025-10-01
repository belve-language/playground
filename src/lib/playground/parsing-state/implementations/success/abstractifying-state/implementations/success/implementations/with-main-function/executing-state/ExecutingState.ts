import type {SupportedExecutingState} from "./supported/SupportedExecutingState.ts";
import type {SupportedFunctionCallingResult} from "../../../../../../../../../../belve/function-calling-result/supported/SupportedFunctionCallingResult.ts";
export abstract class ExecutingState<TypeName extends string> {
	protected constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public abstract generateEveryExecutingState(
		generator: Generator<SupportedFunctionCallingResult, void, void>,
	): Generator<SupportedExecutingState, void, void>;
	public readonly typeName: TypeName;
}
