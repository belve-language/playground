import {CallingResult} from "../../CallingResult.ts";
import {logCallingResultTypeName} from "./type-name/logCallingResultTypeName.ts";
export class LogCallingResult extends CallingResult<
	typeof logCallingResultTypeName
> {
	public constructor() {
		super(logCallingResultTypeName);
	}
	// TODO: Add data (message to log)
}
