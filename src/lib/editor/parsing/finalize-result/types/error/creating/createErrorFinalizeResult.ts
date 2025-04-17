import {createFinalizeResult} from "../../../creating/createFinalizeResult.ts";
import type {ErrorFinalizeResult} from "../ErrorFinalizeResult.ts";
import {errorFinalizeResultTypeName} from "../type-name/errorFinalizeResultTypeName.ts";
export function createErrorFinalizeResult(
	message: string,
): ErrorFinalizeResult {
	return createFinalizeResult(errorFinalizeResultTypeName, {message});
}
