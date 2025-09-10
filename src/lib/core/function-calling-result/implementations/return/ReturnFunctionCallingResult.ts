import type {ReturnFunctionCallingResultData} from "./data/ReturnFunctionCallingResultData.ts";
import {returnFunctionCallingResultTypeName} from "./type-name/returnFunctionCallingResultTypeName.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {FunctionCallingResult} from "../../FunctionCallingResult.ts";
export class ReturnFunctionCallingResult extends FunctionCallingResult<
	ReturnFunctionCallingResultData,
	typeof returnFunctionCallingResultTypeName
> {
	public constructor(unknownsValues: readonly unknown[], variables: Variables) {
		super(
			{unknownsValues: unknownsValues, variables: variables},
			returnFunctionCallingResultTypeName,
		);
	}
}
