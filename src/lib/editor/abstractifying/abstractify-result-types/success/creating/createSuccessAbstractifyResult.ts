import {createAbstractifyResult} from "../../createAbstractifyResult.ts";
import type {SuccessAbstractifyResultData} from "../data/SuccessAbstractifyResultData.ts";
import type {SuccessAbstractifyResult} from "../SuccessAbstractifyResult.ts";
import {successAbstractifyResultStatus} from "../status/successAbstractifyResultStatus.ts";
export function createSuccessAbstractifyResult(
	data: SuccessAbstractifyResultData,
): SuccessAbstractifyResult {
	return createAbstractifyResult(successAbstractifyResultStatus, data);
}
