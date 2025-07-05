import type {ErrorSubabstractifyResult} from "../types/error/ErrorSubabstractifyResult.ts";
export type SupportedSubabstractifyResult =
	| ErrorSubabstractifyResult
	| SuccessSubabstractifyResult;
