import type {ReturnFunctionCallingResult} from "../implementations/return/ReturnFunctionCallingResult.ts";
import type {StepFunctionCallingResult} from "../implementations/step/StepFunctionCallingResult.ts";
import type {SuccessFunctionCallingResult} from "../implementations/success/SuccessFunctionCallingResult.ts";
export type SupportedFunctionCallingResult =
	| ReturnFunctionCallingResult
	| StepFunctionCallingResult
	| SuccessFunctionCallingResult;
