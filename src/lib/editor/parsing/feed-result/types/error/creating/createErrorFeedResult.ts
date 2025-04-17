import {createFeedResult} from "../../../creating/createFeedResult.ts";
import type {ErrorFeedResult} from "../ErrorFeedResult.ts";
import {errorFeedResultTypeName} from "../type-name/errorFeedResultTypeName.ts";
export function createErrorFeedResult(message: string): ErrorFeedResult {
	return createFeedResult(errorFeedResultTypeName, {message});
}
