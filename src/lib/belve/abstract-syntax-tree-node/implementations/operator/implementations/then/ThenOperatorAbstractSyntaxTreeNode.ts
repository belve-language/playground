import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {FailureLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/failure/FailureLogStatementExecutingResult.ts";
import {SuccessLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/success/SuccessLogStatementExecutingResult.ts";
import type {SupportedLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/supported/SupportedLogStatementExecutingResult.ts";
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
				case failureStatementExecutingResultTypeName: {
					const thenOperatorOperatingResult1: FailureLogStatementExecutingResult =
						new FailureLogStatementExecutingResult(this, variables);
					yield thenOperatorOperatingResult1;
					const thenOperatorOperatingResult2: FailureStatementExecutingResult =
						new FailureStatementExecutingResult();
					yield thenOperatorOperatingResult2;
					break;
				}
				case logStatementExecutingResultTypeName: {
					const thenOperatorOperatingResult1: SupportedLogStatementExecutingResult =
						firstStatementExecutingResult;
					// TODO
					// new LogStatementExecutingResult(
					// 	firstStatementExecutingResult.actionTypeName,
					// 	firstStatementExecutingResult.node,
					// 	firstStatementExecutingResult.variables,
					// );
					yield thenOperatorOperatingResult1;
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
							case failureStatementExecutingResultTypeName: {
								const thenOperatorOperatingResult2: FailureStatementExecutingResult =
									new FailureStatementExecutingResult();
								yield thenOperatorOperatingResult2;
								break;
							}
							case logStatementExecutingResultTypeName: {
								const thenOperatorOperatingResult2: SupportedLogStatementExecutingResult =
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
								const newUnknowns: Variables =
									restStatementsExecutingResult.unknowns;
								const combinedUnknowns: Variables = {
									...unknowns,
									...newUnknowns,
								};
								const thenOperatorOperatingResult2: ReturnStatementExecutingResult =
									new ReturnStatementExecutingResult(combinedUnknowns);
								yield thenOperatorOperatingResult2;
								break;
							}
						}
					}
					break;
				}
			}
		}
	}
}
