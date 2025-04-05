import type {ParserResult} from "../../ParseResult.ts";
export type ErrorFeedResult = ParserResult<
	"error",
	Readonly<{message: string}>
>;
