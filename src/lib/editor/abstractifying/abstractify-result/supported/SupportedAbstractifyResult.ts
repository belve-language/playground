import type {ErrorAbstractifyResult} from "../types/error/ErrorAbstractifyResult.ts";
import type {SuccessAbstractifyResult} from "../types/success/SuccessAbstractifyResult.ts";
export type SupportedAbstractifyResult =
	| ErrorAbstractifyResult
	| SuccessAbstractifyResult;
