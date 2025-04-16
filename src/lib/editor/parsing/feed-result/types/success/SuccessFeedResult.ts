import type {Parser} from "../../../parser/Parser.ts";
import type {FeedResult} from "../../FeedResult.ts";
export type SuccessFeedResult<NewParserToUse extends Parser> = FeedResult<
	"success",
	Readonly<{newParser: NewParserToUse}>
>;
