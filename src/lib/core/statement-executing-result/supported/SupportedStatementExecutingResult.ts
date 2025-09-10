import type {FailureStatementExecutingResult} from "../implementations/failure/FailureStatementExecutingResult.ts";
import type {ReturnStatementExecutingResult} from "../implementations/return/ReturnStatementExecutingResult.ts";
import type {StepStatementExecutingResult} from "../implementations/step/StepStatementExecutingResult.ts";
import type {SuccessStatementExecutingResult} from "../implementations/success/SuccessStatementExecutingResult.ts";
export type SupportedStatementExecutingResult =
	| FailureStatementExecutingResult
	| ReturnStatementExecutingResult
	| StepStatementExecutingResult
	| SuccessStatementExecutingResult;
