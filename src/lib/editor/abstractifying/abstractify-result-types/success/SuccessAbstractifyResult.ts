import type {AbstractifyResult} from "../../AbstractifyResult.ts";
import type {SuccessParseResultData} from "./data/SuccessAbstractifyResultData.ts";
import type {successParseResultStatus} from "./status/successAbstractifyResultStatus.ts";
export type SuccessAbstractifyResult = AbstractifyResult<
	typeof successParseResultStatus,
	SuccessParseResultData
>;
