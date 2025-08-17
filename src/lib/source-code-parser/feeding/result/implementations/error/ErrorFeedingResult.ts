import type {ErrorFeedingResultData} from "./data/DataFeedingResultData.ts";
import {errorFeedingResultTypeName} from "./type-name/errorFeedingResultTypeName.ts";
import type {Character} from "../../../../../character/Character.ts";
import type {Index} from "../../../../../index/Index.ts";
import {FeedingResult} from "../../FeedingResult.ts";
export class ErrorFeedingResult extends FeedingResult<
	ErrorFeedingResultData,
	typeof errorFeedingResultTypeName
> {
	public constructor(character: Character, index: Index, message: string) {
		super(
			{character: character, index: index, message: message},
			errorFeedingResultTypeName,
		);
	}
}
