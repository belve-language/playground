import type {IntermediateStatementsAbstractSyntaxTreeNodeChildren} from "./children/IntermediateStatementsAbstractSyntaxTreeNodeChildren.ts";
import type {BuiltInFunction} from "../../../../../../playground/built-in-functions/built-in-function/BuiltInFunction.ts";
import type {Function} from "../../../../../function/Function.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
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
import type {NonMainFunctionAbstractSyntaxTreeNode} from "../../../function/implementations/non-main/NonMainFunctionAbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../../StatementsAbstractSyntaxTreeNode.ts";
export class IntermediateStatementsAbstractSyntaxTreeNode extends StatementsAbstractSyntaxTreeNode<IntermediateStatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: IntermediateStatementsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override *execute(
		availables: Variables,
		nonMainFunctions: NonMainFunctions<Function>,
	): Generator<
		ReturnStatementExecutingResult | SupportedLogStatementExecutingResult,
		void,
		void
	> {
		// const intermediateStatementsExecutingResult1: StepLogStatementExecutingResult =
		// 	new StepLogStatementExecutingResult(availables, this);
		// yield intermediateStatementsExecutingResult1;
		const operatedStatementExecutingResults =
			this.children.operatedStatement.execute(
				availables,
				nonMainFunctions,
				this.children.restStatements,
			);
		// let hasFailed = true;
		for (const operatedStatementExecutingResult of operatedStatementExecutingResults) {
			switch (operatedStatementExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (operatedStatementExecutingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const intermediateStatementsExecutingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									operatedStatementExecutingResult.availables,
									operatedStatementExecutingResult.node,
								);
							yield intermediateStatementsExecutingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const intermediateStatementsExecutingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									operatedStatementExecutingResult.availables,
									operatedStatementExecutingResult.node,
								);
							yield intermediateStatementsExecutingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const intermediateStatementsExecutingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									operatedStatementExecutingResult.availables,
									operatedStatementExecutingResult.node,
									operatedStatementExecutingResult.unknowns,
								);
							yield intermediateStatementsExecutingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					// hasFailed = false;
					const unknowns: Variables = operatedStatementExecutingResult.unknowns;
					// const intermediateStatementsExecutingResult2: SuccessLogStatementExecutingResult =
					// 	new SuccessLogStatementExecutingResult(availables, this, unknowns);
					// yield intermediateStatementsExecutingResult2;
					const intermediateStatementsExecutingResult3: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield intermediateStatementsExecutingResult3;
					break;
				}
			}
		}
		// if (hasFailed) {
		// 	const intermediateStatementsExecutingResult2: FailureLogStatementExecutingResult =
		// 		new FailureLogStatementExecutingResult(availables, this);
		// 	yield intermediateStatementsExecutingResult2;
		// }
	}
	public override lint(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
		encounteredStatements: readonly SupportedStatementAbstractSyntaxTreeNode[],
		hasEncounteredOtherStatements: boolean,
		nonMainFunctions: NonMainFunctions<NonMainFunctionAbstractSyntaxTreeNode>,
	): readonly string[] {
		return [
			...this.children.operatedStatement.lint(
				builtInFunctions,
				encounteredStatements,
				nonMainFunctions,
			),
			...this.children.restStatements.lint(
				builtInFunctions,
				[
					...encounteredStatements,
					// TODO
					...this.children.operatedStatement.children.operator.checkIfShouldConsiderStatementAsEncountered(
						this.children.operatedStatement.children.statement,
					),
				],
				true,
				nonMainFunctions,
			),
		];
	}
	public override *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<IntermediateStatementsAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
}
