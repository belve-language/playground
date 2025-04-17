import type {ParseResult} from "../../ParseResult.ts";
import type {SuccessParseResultData} from "./data/SuccessParseResultData.ts";
import type {successParseResultTypeName} from "./type-name/successParseResultTypeName.ts";
export type SuccessParseResult = ParseResult<
	typeof successParseResultTypeName,
	SuccessParseResultData
>;
