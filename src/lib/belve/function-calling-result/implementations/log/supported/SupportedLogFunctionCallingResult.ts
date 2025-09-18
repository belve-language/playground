import type {FailureLogFunctionCallingResult} from "../implementations/failure/FailureLogFunctionCallingResult.ts";
import type {StepLogFunctionCallingResult} from "../implementations/step/StepLogFunctionCallingResult.ts";
import type {SuccessLogFunctionCallingResult} from "../implementations/success/SuccessLogFunctionCallingResult.ts";
export type SupportedLogFunctionCallingResult =
	| FailureLogFunctionCallingResult
	| StepLogFunctionCallingResult
	| SuccessLogFunctionCallingResult;
