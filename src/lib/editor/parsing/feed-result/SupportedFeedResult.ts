import type {Parser} from "../parser/Parser.ts";
import type {ErrorFeedResult} from "./types/error/ErrorFeedResult.ts";
import type {SuccessFeedResult} from "./types/success/SuccessFeedResult.ts";
export type SupportedFeedResult = ErrorFeedResult | SuccessFeedResult<Parser>;
