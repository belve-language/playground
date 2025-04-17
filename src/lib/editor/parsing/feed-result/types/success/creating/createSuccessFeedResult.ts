import type {Parser} from "../../../../parser/Parser.ts";
import {createFeedResult} from "../../../creating/createFeedResult.ts";
import type {SuccessFeedResult} from "../SuccessFeedResult.ts";
import {successFeedResultTypeName} from "../type-name/successFeedResultTypeName.ts";
export function createSuccessFeedResult<NewParserToUse extends Parser>(
	newParser: NewParserToUse,
): SuccessFeedResult<NewParserToUse> {
	return createFeedResult(successFeedResultTypeName, {newParser});
}
