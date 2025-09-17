import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {
	LogStatementExecutingResult,
	StepLogStatementExecutingResult,
	SuccessLogStatementExecutingResult,
} from "../../../../../statement-executing-result/implementations/log/LogStatementExecutingResult.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../../../statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
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
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const firstStatementExecutingResults = firstStatement.execute(
			nonMainFunctions,
			variables,
		);
		for (const firstStatementExecutingResult of firstStatementExecutingResults) {
			switch (firstStatementExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					const orOperatorOperatingResult1 = firstStatementExecutingResult;
					yield orOperatorOperatingResult1;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const orOperatorOperatingResult1 = firstStatementExecutingResult;
					yield orOperatorOperatingResult1;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					break;
				}
			}
		}
		const orOperatorOperatingResult1 = new SuccessLogStatementExecutingResult(
			this,
			{},
			variables,
		);
		yield orOperatorOperatingResult1;
		const restStatementsExecutingResults = restStatements.execute(
			nonMainFunctions,
			variables,
		);
		for (const restStatementsExecutingResult of restStatementsExecutingResults) {
			yield restStatementsExecutingResult;
		}
	}
}
