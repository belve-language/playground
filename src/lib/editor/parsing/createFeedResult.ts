import type {FeedResult} from "./FeedResult.ts";
export function createFeedResult<StatusToUse extends string, DataToUse>(
	status: StatusToUse,
	data: DataToUse,
): FeedResult<StatusToUse, DataToUse> {
	return {status, data};
}
