import {returnStatementExecutingResultTypeName} from "./type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class ReturnStatementExecutingResult extends StatementExecutingResult<
	typeof returnStatementExecutingResultTypeName
> {
	public constructor(variables: Variables) {
		super(returnStatementExecutingResultTypeName);
		this.variables = variables;
	}
	public readonly variables: Variables;
}
