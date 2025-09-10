import type {StepStatementExecutingResultData} from "./data/StepStatementExecutingResultData.ts";
import {stepStatementExecutingResultTypeName} from "./type-name/stepStatementExecutingResultTypeName.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class StepStatementExecutingResult extends StatementExecutingResult<
	StepStatementExecutingResultData,
	typeof stepStatementExecutingResultTypeName
> {
	public constructor(node: SupportedStatementAbstractSyntaxTreeNode) {
		super({node: node}, stepStatementExecutingResultTypeName);
	}
}
