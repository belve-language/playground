import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "./type-name/failureStatementExecutingResultTypeName.ts";
export class FailureStatementExecutingResult extends StatementExecutingResult<
	typeof failureStatementExecutingResultTypeName
> {
	public constructor() {
		super(failureStatementExecutingResultTypeName);
	}
}
