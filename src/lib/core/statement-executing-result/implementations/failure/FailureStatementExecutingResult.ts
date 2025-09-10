import type {FailureStatementExecutingResultData} from "./data/FailureStatementExecutingResultData.ts";
import {failureStatementExecutingResultTypeName} from "./type-name/failureStatementExecutingResultTypeName.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class FailureStatementExecutingResult extends StatementExecutingResult<
	FailureStatementExecutingResultData,
	typeof failureStatementExecutingResultTypeName
> {
	public constructor(node: SupportedStatementAbstractSyntaxTreeNode) {
		super({node: node}, failureStatementExecutingResultTypeName);
	}
}
