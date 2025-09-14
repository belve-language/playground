import type {ReturnStatementExecutingResultData} from "./data/ReturnStatementExecutingResultData.ts";
import {returnStatementExecutingResultTypeName} from "./type-name/returnStatementExecutingResultTypeName.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class ReturnStatementExecutingResult extends StatementExecutingResult<
	ReturnStatementExecutingResultData,
	typeof returnStatementExecutingResultTypeName
> {
	public constructor(variables: Variables) {
		super({variables: variables}, returnStatementExecutingResultTypeName);
	}
}
