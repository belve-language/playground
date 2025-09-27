import type {SupportedExecutingState} from "./supported/SupportedExecutingState.ts";
export abstract class ExecutingState<TypeName extends string> {
	protected constructor(typeName: TypeName) {
		this.typeName = typeName;
	}
	public abstract generateEveryExecutingState(): Generator<
		SupportedExecutingState,
		void,
		void
	>;
	public readonly typeName: TypeName;
}
