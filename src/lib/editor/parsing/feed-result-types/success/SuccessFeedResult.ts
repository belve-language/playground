import type {Parser} from "../../parser/Parser.ts";
import type {ParserResult} from "../../ParseResult.ts";
export type SuccessFeedResult<NewParserToUse extends Parser> = ParserResult<
	"success",
	Readonly<{newParser: NewParserToUse}>
>;
