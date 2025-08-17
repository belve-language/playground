import type {ErrorFeedingFinalizingResultData} from "./data/ErrorFeedingFinalizingResultData.ts";
import {errorFeedingFinalizingResultTypeName} from "./type-name/errorFeedingFinalizingResultTypeName.ts";
import {FeedingFinalizingResult} from "../../FeedingFinalizingResult.ts";
export class ErrorFeedingFinalizingResult extends FeedingFinalizingResult<
	ErrorFeedingFinalizingResultData,
	typeof errorFeedingFinalizingResultTypeName
> {
	public constructor(message: string) {
		super({message: message}, errorFeedingFinalizingResultTypeName);
	}
}
