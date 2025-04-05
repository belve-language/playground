import type {ParserResult} from "../../ParseResult.ts";
export type ErrorFinalizeResult = ParserResult<
	"error",
	Readonly<{message: string}>
>;
