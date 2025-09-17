import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
import {logFunctionCallingResultTypeName} from "./type-name/logFunctionCallingResultTypeName.ts";
export class LogFunctionCallingResult extends FunctionCallingResult<
	typeof logFunctionCallingResultTypeName
> {
	public constructor() {
		super(logFunctionCallingResultTypeName);
	}
}
