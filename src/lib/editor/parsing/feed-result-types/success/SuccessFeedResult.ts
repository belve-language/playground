import type {Parser} from "prettier";
import type {FeedResult} from "../../FeedResult.ts";
export type SuccessFeedResult<NewParserToUse extends Parser> = FeedResult<
	"success",
	Readonly<{newParser: NewParserToUse}>
>;
