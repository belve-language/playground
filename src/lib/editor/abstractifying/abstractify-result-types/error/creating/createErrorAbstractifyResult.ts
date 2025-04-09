import {createAbstractifyResult} from "../../createAbstractifyResult.ts";
import type {ErrorAbstractifyResultData} from "../data/ErrorAbstractifyResultData.ts";
import type {ErrorAbstractifyResult} from "../ErrorAbstractifyResult.ts";
import {errorAbstractifyResultStatus} from "../status/errorAbstractifyResultStatus.ts";
export function createErrorAbstractifyResult(
	data: ErrorAbstractifyResultData,
): ErrorAbstractifyResult {
	return createAbstractifyResult(errorAbstractifyResultStatus, data);
}
