import type {SupportedLogFunctionCallingResult} from "../implementations/log/supported/SupportedLogFunctionCallingResult.ts";
import type {ReturnFunctionCallingResult} from "../implementations/return/ReturnFunctionCallingResult.ts";
export type SupportedFunctionCallingResult =
	| ReturnFunctionCallingResult
	| SupportedLogFunctionCallingResult;
