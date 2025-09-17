import {logStatementExecutingResultTypeName} from "./type-name/logStatementExecutingResultTypeName.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class LogStatementExecutingResult extends StatementExecutingResult<
	typeof logStatementExecutingResultTypeName
> {
	public constructor() {
		super(logStatementExecutingResultTypeName);
	}
}
