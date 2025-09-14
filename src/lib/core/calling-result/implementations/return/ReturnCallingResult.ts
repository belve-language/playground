import type {ReturnCallingResultData} from "./data/ReturnCallingResultData.ts";
import {returnCallingResultTypeName} from "./type-name/returnCallingResultTypeName.ts";
import {CallingResult} from "../../CallingResult.ts";
export class ReturnCallingResult extends CallingResult<
	ReturnCallingResultData,
	typeof returnCallingResultTypeName
> {
	public constructor(unknownsValues: readonly unknown[]) {
		super({unknownsValues: unknownsValues}, returnCallingResultTypeName);
	}
}
