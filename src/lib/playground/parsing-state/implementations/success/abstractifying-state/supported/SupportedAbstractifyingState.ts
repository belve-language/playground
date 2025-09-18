import type {ErrorAbstractifyingState} from "../implementations/error/ErrorAbstractifyingState.ts";
import type {SupportedSuccessAbstractifyingState} from "../implementations/success/supported/SupportedSuccessAbstractifyingState.ts";
export type SupportedAbstractifyingState =
	| ErrorAbstractifyingState
	| SupportedSuccessAbstractifyingState;
