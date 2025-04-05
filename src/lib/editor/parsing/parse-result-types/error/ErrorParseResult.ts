import type {ParserResult} from "../../ParseResult.ts";
export type ErrorParseResult = ParserResult<
	"error",
	Readonly<{message: string}>
>;
