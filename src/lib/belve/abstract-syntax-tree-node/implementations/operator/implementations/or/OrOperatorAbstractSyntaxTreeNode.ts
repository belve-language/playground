import type {Function} from "../../../../../function/Function.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/failure/FailureLogStatementExecutingResult.ts";
import {failureLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/failure/action-type-name/failureLogStatementExecutingResultActionTypeName.ts";
import {StepLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/step/StepLogStatementExecutingResult.ts";
import {stepLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/step/action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
import {SuccessLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/success/SuccessLogStatementExecutingResult.ts";
import {successLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/success/action-type-name/successLogStatementExecutingResultActionTypeName.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
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
		availables: Variables,
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions<Function>,
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const orOperatorOperatingResult1: StepLogStatementExecutingResult =
			new StepLogStatementExecutingResult(availables, this);
		yield orOperatorOperatingResult1;
		const firstStatementExecutingResults = firstStatement.execute(
			availables,
			nonMainFunctions,
		);
		let hasFailed = true;
		for (const firstStatementExecutingResult of firstStatementExecutingResults) {
			switch (firstStatementExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (firstStatementExecutingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const orOperatorOperatingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									firstStatementExecutingResult.availables,
									firstStatementExecutingResult.node,
								);
							yield orOperatorOperatingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const orOperatorOperatingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									firstStatementExecutingResult.availables,
									firstStatementExecutingResult.node,
								);
							yield orOperatorOperatingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const orOperatorOperatingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									firstStatementExecutingResult.availables,
									firstStatementExecutingResult.node,
									firstStatementExecutingResult.unknowns,
								);
							yield orOperatorOperatingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					hasFailed = false;
					const unknowns: Variables = firstStatementExecutingResult.unknowns;
					const orOperatorOperatingResult2: SuccessLogStatementExecutingResult =
						new SuccessLogStatementExecutingResult(availables, this, unknowns);
					yield orOperatorOperatingResult2;
					const orOperatorOperatingResult3: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield orOperatorOperatingResult3;
					break;
				}
			}
		}
		const restStatementsExecutingResults = restStatements.execute(
			availables,
			nonMainFunctions,
		);
		for (const restStatementsExecutingResult of restStatementsExecutingResults) {
			switch (restStatementsExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (restStatementsExecutingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const orOperatorOperatingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									restStatementsExecutingResult.availables,
									restStatementsExecutingResult.node,
								);
							yield orOperatorOperatingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const orOperatorOperatingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									restStatementsExecutingResult.availables,
									restStatementsExecutingResult.node,
								);
							yield orOperatorOperatingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const orOperatorOperatingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									restStatementsExecutingResult.availables,
									restStatementsExecutingResult.node,
									restStatementsExecutingResult.unknowns,
								);
							yield orOperatorOperatingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					hasFailed = false;
					const unknowns: Variables = restStatementsExecutingResult.unknowns;
					const orOperatorOperatingResult2: SuccessLogStatementExecutingResult =
						new SuccessLogStatementExecutingResult(availables, this, unknowns);
					yield orOperatorOperatingResult2;
					const orOperatorOperatingResult3: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield orOperatorOperatingResult3;
					break;
				}
			}
		}
		if (hasFailed) {
			const orOperatorOperatingResult2: FailureLogStatementExecutingResult =
				new FailureLogStatementExecutingResult(availables, this);
			yield orOperatorOperatingResult2;
		}
	}
}
