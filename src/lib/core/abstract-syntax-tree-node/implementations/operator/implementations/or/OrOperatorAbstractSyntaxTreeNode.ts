import type {Functions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsAbstractSyntaxTreeNode} from "../../../statements/StatementsAbstractSyntaxTreeNode.ts";
import {OperatorAbstractSyntaxTreeNode} from "../../OperatorAbstractSyntaxTreeNode.ts";
import {ThenOperatorAbstractSyntaxTreeNode} from "../then/ThenOperatorAbstractSyntaxTreeNode.ts";
export class OrOperatorAbstractSyntaxTreeNode extends OperatorAbstractSyntaxTreeNode {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
	public override *mutate(): Generator<
		ThenOperatorAbstractSyntaxTreeNode,
		void,
		void
	> {
		yield new ThenOperatorAbstractSyntaxTreeNode(new SpanIndexes(0, 0));
	}
	public override *operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions,
		restStatements: StatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const firstStatementExecutingResults = firstStatement.execute(
			functions,
			variables,
		);
		yield* firstStatementExecutingResults;
		const restStatementsExecutingResults = restStatements.execute(
			functions,
			variables,
		);
		yield* restStatementsExecutingResults;
	}
	public override stringify(): string {
		return ".";
	}
}
