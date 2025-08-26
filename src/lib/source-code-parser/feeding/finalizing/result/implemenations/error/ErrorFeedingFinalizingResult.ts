import type {ErrorFeedingFinalizingResultData} from "./data/ErrorFeedingFinalizingResultData.ts";
import {errorFeedingFinalizingResultTypeName} from "./type-name/errorFeedingFinalizingResultTypeName.ts";
import {FeedingFinalizingResult} from "../../FeedingFinalizingResult.ts";
export class ErrorFeedingFinalizingResult extends FeedingFinalizingResult<
	ErrorFeedingFinalizingResultData,
	typeof errorFeedingFinalizingResultTypeName
> {
	private constructor(data: ErrorFeedingFinalizingResultData) {
		super(data, errorFeedingFinalizingResultTypeName);
	}
	public static create(message: string): ErrorFeedingFinalizingResult {
		const result = new ErrorFeedingFinalizingResult({message: message});
		return result;
	}
}
