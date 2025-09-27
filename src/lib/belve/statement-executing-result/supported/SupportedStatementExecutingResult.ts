import type {SupportedLogStatementExecutingResult} from "../implementations/log/supported/SupportedLogStatementExecutingResult.ts";
import type {ReturnStatementExecutingResult} from "../implementations/return/ReturnStatementExecutingResult.ts";
export type SupportedStatementExecutingResult =
	| ReturnStatementExecutingResult
	| SupportedLogStatementExecutingResult;
