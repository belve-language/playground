import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {
	FailureLogStatementExecutingResult,
	SuccessLogStatementExecutingResult,
	type SupportedLogStatementExecutingResult,
} from "../../../../../statement-executing-result/implementations/log/LogStatementExecutingResult.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../../../statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
import {OperatorAbstractSyntaxTreeNode} from "../../OperatorAbstractSyntaxTreeNode.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../or/OrOperatorAbstractSyntaxTreeNode.ts";
export class ThenOperatorAbstractSyntaxTreeNode extends OperatorAbstractSyntaxTreeNode {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
	public override *mutate(): Generator<
		OrOperatorAbstractSyntaxTreeNode,
		void,
		void
	> {
		yield new OrOperatorAbstractSyntaxTreeNode(new SpanIndexes(0, 0));
	}
	public override *operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions,
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<
		| FailureStatementExecutingResult
		| ReturnStatementExecutingResult
		| SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const firstStatementExecutingResults = firstStatement.execute(
			nonMainFunctions,
			variables,
		);
		for (const firstStatementExecutingResult of firstStatementExecutingResults) {
			switch (firstStatementExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					const thenOperatorRperatingResult1 = firstStatementExecutingResult;
					// TODO
					// new LogStatementExecutingResult(
					// 	firstStatementExecutingResult.actionTypeName,
					// 	firstStatementExecutingResult.node,
					// 	firstStatementExecutingResult.variables,
					// );
					yield thenOperatorRperatingResult1;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknowns: Variables = firstStatementExecutingResult.unknowns;
					const newVariables: Variables = {...variables, ...unknowns};
					const thenOperatorOperatingResult1 =
						new SuccessLogStatementExecutingResult(
							this,
							unknowns,
							newVariables,
						);
					yield thenOperatorOperatingResult1;
					const restStatementsExecutingResults = restStatements.execute(
						nonMainFunctions,
						newVariables,
					);
					for (const restStatementsExecutingResult of restStatementsExecutingResults) {
						// yield restStatementsExecutingResult;
						switch (restStatementsExecutingResult.typeName) {
							case logStatementExecutingResultTypeName: {
								const thenOperatorOperatingResult2 =
									restStatementsExecutingResult;
								// TODO
								// new LogStatementExecutingResult(
								// 	restStatementsExecutingResult.actionTypeName,
								// 	restStatementsExecutingResult.node,
								// 	restStatementsExecutingResult.variables,
								// );
								yield thenOperatorOperatingResult2;
								break;
							}
							case returnStatementExecutingResultTypeName: {
								// TODO: RENAME
								const restUnknowns: Variables =
									restStatementsExecutingResult.unknowns;
								const combinedUnknowns: Variables = {
									...unknowns,
									...restUnknowns,
								};
								const thenOperatorOperatingResult3 =
									new ReturnStatementExecutingResult(combinedUnknowns);
								yield thenOperatorOperatingResult3;
								break;
							}
							case failureStatementExecutingResultTypeName: {
								const thenOperatorOperatingResult4 =
									new FailureStatementExecutingResult();
								yield thenOperatorOperatingResult4;
								break;
							}
						}
					}
					break;
				}
				case failureStatementExecutingResultTypeName: {
					const thenOperatorOperatingResult2 =
						new FailureLogStatementExecutingResult(this, variables);
					yield thenOperatorOperatingResult2;
					const thenOperatorOperatingResult3 =
						new FailureStatementExecutingResult();
					yield thenOperatorOperatingResult3;
					break;
				}
			}
		}
	}
}
