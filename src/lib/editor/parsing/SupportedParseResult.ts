import type {ErrorParseResult} from "./parse-result-types/error/ErrorParseResult.ts";
import type {SuccessParseResult} from "./parse-result-types/success/SuccessParseResult.ts";
export type SupportedParseResult = ErrorParseResult | SuccessParseResult;
