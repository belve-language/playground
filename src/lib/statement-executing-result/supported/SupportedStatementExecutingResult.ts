import type {ReturnStatementExecutingResult} from "../implementations/return/ReturnStatementExecutingResult.ts";
import type {StepStatementExecutingResult} from "../implementations/step/StepStatementExecutingResult.ts";
import type {SuccessStatementExecutingResult} from "../implementations/success/SuccessStatementExecutingResult.ts";
export type SupportedStatementExecutingResult =
	| ReturnStatementExecutingResult
	| StepStatementExecutingResult
	| SuccessStatementExecutingResult;
