import {CallingResult} from "../../CallingResult.ts";
import {LogCallingResultData} from "./data/LogCallingResultData.ts";
import {logCallingResultTypeName} from "./type-name/logCallingResultTypeName.ts";
export class LogCallingResult extends CallingResult<
	LogCallingResultData,
	typeof logCallingResultTypeName
> {
	public constructor() {
		super({}, logCallingResultTypeName);
	}
}
