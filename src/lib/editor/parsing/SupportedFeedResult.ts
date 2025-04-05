import type {ErrorFeedResult} from "./feed-result-types/error/ErrorFeedResult.ts";
import type {SuccessFeedResult} from "./feed-result-types/success/SuccessFeedResult.ts";
import type {Parser} from "./parser/Parser.ts";
// TODO: Specify the type of Parser
export type SupportedFeedResult = ErrorFeedResult | SuccessFeedResult<Parser>;
