import type {FailureLogStatementExecutingResult} from "../implementations/failure/FailureLogStatementExecutingResult.ts";
import type {StepLogStatementExecutingResult} from "../implementations/step/StepLogStatementExecutingResult.ts";
import type {SuccessLogStatementExecutingResult} from "../implementations/success/SuccessLogStatementExecutingResult.ts";
export type SupportedLogStatementExecutingResult =
	| FailureLogStatementExecutingResult
	| StepLogStatementExecutingResult
	| SuccessLogStatementExecutingResult;
