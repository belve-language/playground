import type {FailureStatementExecutingResult} from "../implementations/failure/FailureStatementExecutingResult.ts";
import type {SupportedLogStatementExecutingResult} from "../implementations/log/supported/SupportedLogStatementExecutingResult.ts";
import type {ReturnStatementExecutingResult} from "../implementations/return/ReturnStatementExecutingResult.ts";
export type SupportedStatementExecutingResult =
	| FailureStatementExecutingResult
	| ReturnStatementExecutingResult
	| SupportedLogStatementExecutingResult;
