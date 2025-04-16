import type {ParseResult} from "./ParseResult.ts";
export function createParseResult<StatusToUse extends string, DataToUse>(
	status: StatusToUse,
	data: DataToUse,
): ParseResult<StatusToUse, DataToUse> {
	return {status, data};
}
