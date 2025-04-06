import type {Parser} from "prettier";
import type {ErrorFeedResult} from "./feed-result-types/error/ErrorFeedResult.ts";
import type {SuccessFeedResult} from "./feed-result-types/success/SuccessFeedResult.ts";
// TODO: Specify the type of Parser
export type SupportedFeedResult = ErrorFeedResult | SuccessFeedResult<Parser>;
