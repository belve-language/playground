import type {FinalStatementsAbstractSyntaxTreeNodeChildren} from "./children/FinalStatementsAbstractSyntaxTreeNodeChildren.ts";
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
export class FinalStatementsAbstractSyntaxTreeNode extends StatementsAbstractSyntaxTreeNode<FinalStatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FinalStatementsAbstractSyntaxTreeNodeChildren,
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
		// const finalStatementsExecutingResult1: StepLogStatementExecutingResult =
		// 	new StepLogStatementExecutingResult(availables, this);
		// yield finalStatementsExecutingResult1;
		const statementExecutingResults = this.children.statement.execute(
			availables,
			nonMainFunctions,
		);
		// let hasFailed = true;
		for (const statementExecutingResult of statementExecutingResults) {
			switch (statementExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (statementExecutingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const finalStatementsExecutingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									statementExecutingResult.availables,
									statementExecutingResult.node,
								);
							yield finalStatementsExecutingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const finalStatementsExecutingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									statementExecutingResult.availables,
									statementExecutingResult.node,
								);
							yield finalStatementsExecutingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const finalStatementsExecutingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									statementExecutingResult.availables,
									statementExecutingResult.node,
									statementExecutingResult.unknowns,
								);
							yield finalStatementsExecutingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					// hasFailed = false;
					const unknowns: Variables = statementExecutingResult.unknowns;
					// const finalStatementsExecutingResult2: SuccessLogStatementExecutingResult =
					// 	new SuccessLogStatementExecutingResult(availables, this, unknowns);
					// yield finalStatementsExecutingResult2;
					const finalStatementsExecutingResult3: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield finalStatementsExecutingResult3;
					break;
				}
			}
		}
		// if (hasFailed) {
		// 	const finalStatementsExecutingResult2: FailureLogStatementExecutingResult =
		// 		new FailureLogStatementExecutingResult(availables, this);
		// 	yield finalStatementsExecutingResult2;
		// }
	}
	public override lint(
		builtInFunctions: NonMainFunctions<BuiltInFunction>,
		encounteredStatements: readonly SupportedStatementAbstractSyntaxTreeNode[],
		hasEncounteredOtherStatements: boolean,
		nonMainFunctions: NonMainFunctions<NonMainFunctionAbstractSyntaxTreeNode>,
	): readonly string[] {
		return [
			...this.children.statement.checkIfWasAlreadyUsed(encounteredStatements),
			...this.children.statement.lint(
				builtInFunctions,
				encounteredStatements,
				hasEncounteredOtherStatements,
				nonMainFunctions,
			),
		];
	}
	public override *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<FinalStatementsAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
}
