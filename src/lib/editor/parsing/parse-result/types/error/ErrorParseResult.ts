import type {ParseResult} from "../../ParseResult.ts";
import type {ErrorParseResultData} from "./data/ErrorParseResultData.ts";
import type {errorParseResultTypeName} from "./type-name/errorParseResultTypeName.ts";
export type ErrorParseResult = ParseResult<
	typeof errorParseResultTypeName,
	ErrorParseResultData
>;
