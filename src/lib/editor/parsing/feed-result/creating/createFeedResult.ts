import type {FeedResult} from "../FeedResult.ts";
export function createFeedResult<TypeNameToUse extends string, DataToUse>(
	typeName: TypeNameToUse,
	data: DataToUse,
): FeedResult<TypeNameToUse, DataToUse> {
	return {typeName, data};
}
