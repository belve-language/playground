import type {FeedResult} from "../../FeedResult.ts";
import type {Parser} from "../../parser/Parser.ts";
export type SuccessFeedResult<NewParserToUse extends Parser> = FeedResult<
	"success",
	Readonly<{newParser: NewParserToUse}>
>;
