import type {FailureSearchParamsFromUrlValidationResult} from "./FailureSearchParamsFromUrlValidationResult.ts";
import type {SuccessSearchParamsFromUrlValidationResult} from "./SuccessSearchParamsFromUrlValidationResult.ts";
export type SupportedSearchParamsFromUrlValidationResult<Datum> =
	| SuccessSearchParamsFromUrlValidationResult<Datum>
	| FailureSearchParamsFromUrlValidationResult;
