import type {SearchParamsFromUrlValidationResult} from "./SearchParamsFromUrlValidationResult.ts";
import type {successSearchParamsFromUrlValidationResultStatus} from "./successSearchParamsFromUrlValidationResultStatus.ts";
export type SuccessSearchParamsFromUrlValidationResult<Datum> =
	SearchParamsFromUrlValidationResult<
		typeof successSearchParamsFromUrlValidationResultStatus
	>
		& Readonly<{datum: Datum}>;
