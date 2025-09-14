import type {FailureExecutingResult} from "../implementations/failure/FailureExecutingResult.ts";
import type {ReturnExecutingResult} from "../implementations/return/ReturnExecutingResult.ts";
import type {StepExecutingResult} from "../implementations/step/StepExecutingResult.ts";
import type {SuccessExecutingResult} from "../implementations/success/SuccessExecutingResult.ts";
export type SupportedExecutingResult =
	| FailureExecutingResult
	| ReturnExecutingResult
	| StepExecutingResult
	| SuccessExecutingResult;
