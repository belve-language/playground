import type {ErrorFeedResult} from "./feed-result-types/error/ErrorFeedResult.ts";
import type {SuccessFeedResult} from "./feed-result-types/success/SuccessFeedResult.ts";
export type SupportedFeedResult = ErrorFeedResult | SuccessFeedResult;
