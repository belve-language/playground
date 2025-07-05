import type {ErrorFinalizeResult} from "../types/error/ErrorFinalizeResult.ts";
import type {SuccessFinalizeResult} from "../types/success/SuccessFinalizeResult.ts";
export type SupportedFinalizeResult =
	| ErrorFinalizeResult
	| SuccessFinalizeResult;
