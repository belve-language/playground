import {returnFunctionCallingResultTypeName} from "./type-name/returnFunctionCallingResultTypeName.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
export class ReturnFunctionCallingResult extends FunctionCallingResult<
	typeof returnFunctionCallingResultTypeName
> {
	public constructor(unknownsValues: readonly unknown[]) {
		super(returnFunctionCallingResultTypeName);
		this.unknownsValues = unknownsValues;
	}
	public readonly unknownsValues: readonly unknown[];
}
