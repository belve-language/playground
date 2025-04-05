import type {ErrorFinalizeResult} from "./finalize-result-types/error/ErrorFinalizeResult.ts";
import type {SuccessFinalizeResult} from "./finalize-result-types/success/SuccessFinalizeResult.ts";
export type SupportedFinalizeResult =
	| ErrorFinalizeResult
	| SuccessFinalizeResult;
