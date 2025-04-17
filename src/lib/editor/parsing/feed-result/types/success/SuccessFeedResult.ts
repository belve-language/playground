import type {Parser} from "../../../parser/Parser.ts";
import type {FeedResult} from "../../FeedResult.ts";
import type {SuccessFeedResultData} from "./data/SuccessFeedResultData.ts";
import type {successFeedResultTypeName} from "./type-name/successFeedResultTypeName.ts";
export type SuccessFeedResult<NewParserToUse extends Parser> = FeedResult<
	typeof successFeedResultTypeName,
	SuccessFeedResultData<NewParserToUse>
>;
