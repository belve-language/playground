import type {ErrorFeedingResult} from "../implementations/error/ErrorFeedingResult.ts";
import type {SuccessFeedingResult} from "../implementations/success/SuccessFeedingResult.ts";
export type SupportedFeedingResult = ErrorFeedingResult | SuccessFeedingResult;
