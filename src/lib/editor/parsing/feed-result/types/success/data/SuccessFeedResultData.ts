import type {Parser} from "../../../../parser/Parser.ts";
export type SuccessFeedResultData<NewParserToUse extends Parser> = Readonly<{
	newParser: NewParserToUse;
}>;
