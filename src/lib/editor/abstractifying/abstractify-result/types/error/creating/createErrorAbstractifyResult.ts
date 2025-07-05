import {createAbstractifyResult} from "../../../creating/createAbstractifyResult.ts";
import type {ErrorAbstractifyResultData} from "../data/ErrorAbstractifyResultData.ts";
import type {ErrorAbstractifyResult} from "../ErrorAbstractifyResult.ts";
import {errorAbstractifyResultTypeName} from "../type-name/errorAbstractifyResultTypeName.ts";
export function createErrorAbstractifyResult(
	data: ErrorAbstractifyResultData,
): ErrorAbstractifyResult {
	return createAbstractifyResult(errorAbstractifyResultTypeName, data);
}
