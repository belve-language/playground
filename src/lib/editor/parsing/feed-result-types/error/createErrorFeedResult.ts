import {createFeedResult} from "../../createFeedResult.ts";
import type {ErrorFeedResult} from "./ErrorFeedResult.ts";
export function createErrorFeedResult(message: string): ErrorFeedResult {
	return createFeedResult("error", {message});
}
