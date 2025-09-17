import type {ErrorAbstractifyingState} from "../implementations/error/ErrorAbstractifyingState.ts";
import type {WithMainFunctionAbstractifyingState} from "../implementations/with-main-function-success/WithMainFunctionAbstractifyingState.ts";
import type {WithoutMainFunctionAbstractifyingState} from "../implementations/without-main-function-success/WithMainFunctionAbstractifyingState.ts";
export type SupportedAbstractifyingState =
	| ErrorAbstractifyingState
	| WithMainFunctionAbstractifyingState
	| WithoutMainFunctionAbstractifyingState;
