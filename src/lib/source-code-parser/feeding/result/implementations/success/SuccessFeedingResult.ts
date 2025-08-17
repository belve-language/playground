import type {SuccessFeedingResultData} from "./data/SuccessFeedingResultData.ts";
import type {successFeedingResultTypeName} from "./type-name/successFeedingResultTypeName.ts";
import {FeedingResult} from "../../FeedingResult.ts";
export class SuccessFeedingResult extends FeedingResult<
	SuccessFeedingResultData,
	typeof successFeedingResultTypeName
> {
	public constructor(newParser: SourceCodeParser) {
		super({newParser: newParser}, successFeedingResultTypeName);
	}
}
