import {returnStatementExecutingResultTypeName} from "./type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class ReturnStatementExecutingResult extends StatementExecutingResult<
	typeof returnStatementExecutingResultTypeName
> {
	public constructor(unknowns: Variables) {
		super(returnStatementExecutingResultTypeName);
		this.unknowns = unknowns;
	}
	public readonly unknowns: Variables;
}
