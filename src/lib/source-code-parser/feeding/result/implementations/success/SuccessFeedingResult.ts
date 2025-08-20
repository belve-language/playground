import type {SuccessFeedingResultData} from "./data/SuccessFeedingResultData.ts";
import {successFeedingResultTypeName} from "./type-name/successFeedingResultTypeName.ts";
import type {SourceCodeParser} from "../../../../SourceCodeParser.ts";
import {FeedingResult} from "../../FeedingResult.ts";
export class SuccessFeedingResult extends FeedingResult<
	SuccessFeedingResultData,
	typeof successFeedingResultTypeName
> {
	public constructor(newParser: SourceCodeParser) {
		super({newParser: newParser}, successFeedingResultTypeName);
	}
}
