import {createParseResult} from "../../../creating/createParseResult.ts";
import type {ErrorParseResult} from "../ErrorParseResult.ts";
import {errorParseResultTypeName} from "../type-name/errorParseResultTypeName.ts";
export function createErrorParseResult(message: string): ErrorParseResult {
	return createParseResult(errorParseResultTypeName, {message});
}
