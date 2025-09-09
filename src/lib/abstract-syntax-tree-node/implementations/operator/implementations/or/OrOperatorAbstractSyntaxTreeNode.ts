import type {Statements} from "../../../../../../statements/Statements.ts";
import type {Functions} from "../../../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {executeStatements} from "../../../statement/implementations/block/executing-statements/executeStatements.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {OperatorAbstractSyntaxTreeNode} from "../../OperatorAbstractSyntaxTreeNode.ts";
export class OrOperatorAbstractSyntaxTreeNode extends OperatorAbstractSyntaxTreeNode {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
	public override *operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		functions: Functions,
		restStatements: Statements,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const firstStatementExecutingResults = firstStatement.execute(
			functions,
			variables,
		);
		yield* firstStatementExecutingResults;
		const restStatementsExecutingResults = executeStatements(
			functions,
			variables,
			restStatements,
		);
		yield* restStatementsExecutingResults;
	}
}
