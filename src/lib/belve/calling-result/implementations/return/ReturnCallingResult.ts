import {returnCallingResultTypeName} from "./type-name/returnCallingResultTypeName.ts";
import {CallingResult} from "../../CallingResult.ts";
export class ReturnCallingResult extends CallingResult<
	typeof returnCallingResultTypeName
> {
	public constructor(unknownsValues: readonly unknown[]) {
		super(returnCallingResultTypeName);
		this.unknownsValues = unknownsValues;
	}
	public readonly unknownsValues: readonly unknown[];
}
