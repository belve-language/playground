import type {ErrorFeedingFinalizingResult} from "../implemenations/error/ErrorFeedingFinalizingResult.ts";
import type {SuccessFeedingFinalizingResult} from "../implemenations/success/SuccessFeedingFinalizingResult.ts";
export type SupportedFeedingFinalizingResult =
	| ErrorFeedingFinalizingResult
	| SuccessFeedingFinalizingResult;
