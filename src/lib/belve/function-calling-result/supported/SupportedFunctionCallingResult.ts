import type {SupportedLogFunctionCallingResult} from "../implementations/log/LogFunctionCallingResult.ts";
import type {ReturnFunctionCallingResult} from "../implementations/return/ReturnFunctionCallingResult.ts";
export type SupportedFunctionCallingResult =
	| ReturnFunctionCallingResult
	| SupportedLogFunctionCallingResult;
