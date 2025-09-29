import type {Function} from "../../../../../function/Function.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/failure/FailureLogStatementExecutingResult.ts";
import {failureLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/failure/action-type-name/failureLogStatementExecutingResultActionTypeName.ts";
import {StepLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/step/StepLogStatementExecutingResult.ts";
import {stepLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/step/action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
import {SuccessLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/implementations/success/SuccessLogStatementExecutingResult.ts";
import {successLogStatementExecutingResultActionTypeName} from "../../../../../statement-executing-result/implementations/log/implementations/success/action-type-name/successLogStatementExecutingResultActionTypeName.ts";
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
	public override checkIfShouldConsiderStatementAsEncountered(
		statement: SupportedStatementAbstractSyntaxTreeNode,
	): readonly [SupportedStatementAbstractSyntaxTreeNode] {
		return [statement];
	}
	public override *mutate(): Generator<
		OrOperatorAbstractSyntaxTreeNode,
		void,
		void
	> {
		yield new OrOperatorAbstractSyntaxTreeNode(new SpanIndexes(0, 0));
	}
	public override *operate(
		availables: Variables,
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions<Function>,
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
	): Generator<
		ReturnStatementExecutingResult | SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const thenOperatorOperatingResult1: StepLogStatementExecutingResult =
			new StepLogStatementExecutingResult(availables, this);
		yield thenOperatorOperatingResult1;
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
							const thenOperatorExecutingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									firstStatementExecutingResult.availables,
									firstStatementExecutingResult.node,
								);
							yield thenOperatorExecutingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const thenOperatorExecutingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									firstStatementExecutingResult.availables,
									firstStatementExecutingResult.node,
								);
							yield thenOperatorExecutingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const thenOperatorExecutingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									firstStatementExecutingResult.availables,
									firstStatementExecutingResult.node,
									firstStatementExecutingResult.unknowns,
								);
							yield thenOperatorExecutingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknowns: Variables = firstStatementExecutingResult.unknowns;
					const newAvailables: Variables = unknowns;
					const combinedAvailables: Variables = {
						...availables,
						...newAvailables,
					};
					const restStatementsExecutingResults = restStatements.execute(
						combinedAvailables,
						nonMainFunctions,
					);
					for (const restStatementsExecutingResult of restStatementsExecutingResults) {
						switch (restStatementsExecutingResult.typeName) {
							case logStatementExecutingResultTypeName: {
								switch (restStatementsExecutingResult.actionTypeName) {
									case failureLogStatementExecutingResultActionTypeName: {
										const thenOperatorOperatingResult2: FailureLogStatementExecutingResult =
											new FailureLogStatementExecutingResult(
												restStatementsExecutingResult.availables,
												restStatementsExecutingResult.node,
											);
										yield thenOperatorOperatingResult2;
										break;
									}
									case stepLogStatementExecutingResultActionTypeName: {
										const thenOperatorOperatingResult2: StepLogStatementExecutingResult =
											new StepLogStatementExecutingResult(
												restStatementsExecutingResult.availables,
												restStatementsExecutingResult.node,
											);
										yield thenOperatorOperatingResult2;
										break;
									}
									case successLogStatementExecutingResultActionTypeName: {
										const thenOperatorOperatingResult2: SuccessLogStatementExecutingResult =
											new SuccessLogStatementExecutingResult(
												restStatementsExecutingResult.availables,
												restStatementsExecutingResult.node,
												restStatementsExecutingResult.unknowns,
											);
										yield thenOperatorOperatingResult2;
										break;
									}
								}
								break;
							}
							case returnStatementExecutingResultTypeName: {
								hasFailed = false;
								const newUnknowns: Variables =
									restStatementsExecutingResult.unknowns;
								const combinedUnknowns: Variables = {
									...unknowns,
									...newUnknowns,
								};
								const thenOperatorExecutingResult2: SuccessLogStatementExecutingResult =
									new SuccessLogStatementExecutingResult(
										availables,
										this,
										combinedUnknowns,
									);
								yield thenOperatorExecutingResult2;
								const thenOperatorOperatingResult3: ReturnStatementExecutingResult =
									new ReturnStatementExecutingResult(combinedUnknowns);
								yield thenOperatorOperatingResult3;
								break;
							}
						}
					}
					break;
				}
			}
		}
		if (hasFailed) {
			const thenOperatorOperatingResult2: FailureLogStatementExecutingResult =
				new FailureLogStatementExecutingResult(availables, this);
			yield thenOperatorOperatingResult2;
		}
	}
}
