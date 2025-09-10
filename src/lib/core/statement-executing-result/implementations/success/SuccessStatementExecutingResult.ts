import type {SuccessStatementExecutingResultData} from "./data/SuccessStatementExecutingResultData.ts";
import {successStatementExecutingResultTypeName} from "./type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree-node/implementations/statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {StatementExecutingResult} from "../../StatementExecutingResult.ts";
export class SuccessStatementExecutingResult extends StatementExecutingResult<
	SuccessStatementExecutingResultData,
	typeof successStatementExecutingResultTypeName
> {
	public constructor(
		node: SupportedStatementAbstractSyntaxTreeNode,
		variables: Variables,
	) {
		super(
			{node: node, variables: variables},
			successStatementExecutingResultTypeName,
		);
	}
}
