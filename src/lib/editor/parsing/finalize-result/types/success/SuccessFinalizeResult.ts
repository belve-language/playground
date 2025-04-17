import type {FinalizeResult} from "../../FinalizeResult.ts";
import type {SuccessFinalizeResultData} from "./data/ErrorFinalizeResultData.ts";
import type {successFinalizeResultTypeName} from "./type-name/errorFinalizeResultTypeName.ts";
export type SuccessFinalizeResult = FinalizeResult<
	typeof successFinalizeResultTypeName,
	SuccessFinalizeResultData
>;
