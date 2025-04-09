import type {ErrorAbstractifyResult} from "./abstractify-result-types/error/ErrorAbstractifyResult.ts";
import type {SuccessAbstractifyResult} from "./abstractify-result-types/success/SuccessAbstractifyResult.ts";
export type SupportedAbstractifyResult =
	| ErrorAbstractifyResult
	| SuccessAbstractifyResult;
