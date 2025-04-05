import type {Parser} from "../../parser/Parser.ts";
import type {ParserResult} from "../../ParseResult.ts";
export type SuccessFeedResult = ParserResult<
	"success",
	Readonly<{newParser: Parser}>
>;
