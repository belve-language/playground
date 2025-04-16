import type {ParseResult} from "../../ParseResult.ts";
export type ErrorParseResult = ParseResult<
	"error",
	Readonly<{message: string}>
>;
