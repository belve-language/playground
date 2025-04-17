import type {FinalizeResult} from "../../FinalizeResult.ts";
import type {ErrorFinalizeResultData} from "./data/ErrorFinalizeResultData.ts";
import type {errorFinalizeResultTypeName} from "./type-name/errorFinalizeResultTypeName.ts";
export type ErrorFinalizeResult = FinalizeResult<
	typeof errorFinalizeResultTypeName,
	ErrorFinalizeResultData
>;
