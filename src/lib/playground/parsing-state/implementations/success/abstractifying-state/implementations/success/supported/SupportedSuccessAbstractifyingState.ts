import type {WithMainFunctionSuccessAbstractifyingState} from "../implementations/with-main-function/WithMainFunctionSuccessAbstractifyingState.ts";
import type {WithoutMainFunctionSuccessAbstractifyingState} from "../implementations/without-main-function/WithoutMainFunctionSuccessAbstractifyingState.ts";
export type SupportedSuccessAbstractifyingState =
	| WithMainFunctionSuccessAbstractifyingState
	| WithoutMainFunctionSuccessAbstractifyingState;
