import type {ReturnStatementExecutingResultData} from "./data/ReturnStatementExecutingResultData.ts";
import {returnStatementExecutingResultTypeName} from "./type-name/returnStatementExecutingResultTypeName.ts";
import type {StatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/StatementAbstractSyntaxTreeNode.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class ReturnStatementExecutingResult extends StatementExecutingResult<
	ReturnStatementExecutingResultData,
	typeof returnStatementExecutingResultTypeName
> {
	public constructor(variables: {readonly [variableName: string]: unknown}) {
		super({variables: variables}, returnStatementExecutingResultTypeName);
	}
}
