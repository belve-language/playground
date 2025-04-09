import type {AbstractifyResult} from "../../AbstractifyResult.ts";
import type {errorParseResultStatus} from "./status/errorAbstractifyResultStatus.ts";
export type ErrorAbstractifyResult = AbstractifyResult<
	typeof errorAbstractifyResultStatus,
	ErrorAbstractifyResultData
>;
