import type {FeedResult} from "../../FeedResult.ts";
import type {ErrorFeedResultData} from "./data/ErrorFeedResultData.ts";
import type {errorFeedResultTypeName} from "./type-name/errorFeedResultTypeName.ts";
export type ErrorFeedResult = FeedResult<
	typeof errorFeedResultTypeName,
	ErrorFeedResultData
>;
