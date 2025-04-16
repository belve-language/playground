import type {FeedResult} from "../../FeedResult.ts";
export type ErrorFeedResult = FeedResult<"error", Readonly<{message: string}>>;
