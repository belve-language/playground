import type {OperatedStatementAbstractSyntaxTreeNodeChildren} from "./children/OperatedStatementAbstractSyntaxTreeNodeChildren.ts";
import type {Function} from "../../../function/Function.ts";
import type {NonMainFunctions} from "../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../span-indexes/SpanIndexes.ts";
import {FailureLogStatementExecutingResult} from "../../../statement-executing-result/implementations/log/implementations/failure/FailureLogStatementExecutingResult.ts";
import {failureLogStatementExecutingResultActionTypeName} from "../../../statement-executing-result/implementations/log/implementations/failure/action-type-name/failureLogStatementExecutingResultActionTypeName.ts";
import {StepLogStatementExecutingResult} from "../../../statement-executing-result/implementations/log/implementations/step/StepLogStatementExecutingResult.ts";
import {stepLogStatementExecutingResultActionTypeName} from "../../../statement-executing-result/implementations/log/implementations/step/action-type-name/stepLogStatementExecutingResultActionTypeName.ts";
import {SuccessLogStatementExecutingResult} from "../../../statement-executing-result/implementations/log/implementations/success/SuccessLogStatementExecutingResult.ts";
import {successLogStatementExecutingResultActionTypeName} from "../../../statement-executing-result/implementations/log/implementations/success/action-type-name/successLogStatementExecutingResultActionTypeName.ts";
import {logStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../variables/Variables.ts";
import {AbstractSyntaxTreeNode} from "../../AbstractSyntaxTreeNode.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import type {SupportedStatementsAbstractSyntaxTreeNode} from "../statements/supported/SupportedStatementsAbstractSyntaxTreeNode.ts";
export class OperatedStatementAbstractSyntaxTreeNode extends AbstractSyntaxTreeNode<OperatedStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: OperatedStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public *execute(
		availables: Variables,
		nonMainFunctions: NonMainFunctions<Function>,
		restStatements: SupportedStatementsAbstractSyntaxTreeNode,
	): Generator<SupportedStatementExecutingResult, void, void> {
		// const operatedStatementExecutingResult1: StepLogStatementExecutingResult =
		// 	new StepLogStatementExecutingResult(availables, this);
		// yield operatedStatementExecutingResult1;
		const operatorOperatingResults = this.children.operator.operate(
			availables,
			this.children.statement,
			nonMainFunctions,
			restStatements,
		);
		// let hasFailed = false;
		for (const operatorOperatingResult of operatorOperatingResults) {
			switch (operatorOperatingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (operatorOperatingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const statementExecutingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									operatorOperatingResult.availables,
									operatorOperatingResult.node,
								);
							yield statementExecutingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const statementExecutingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									operatorOperatingResult.availables,
									operatorOperatingResult.node,
								);
							yield statementExecutingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const statementExecutingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									operatorOperatingResult.availables,
									operatorOperatingResult.node,
									operatorOperatingResult.unknowns,
								);
							yield statementExecutingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					// hasFailed = false;
					const unknowns: Variables = operatorOperatingResult.unknowns;
					// const statementExecutingResult2: SuccessLogStatementExecutingResult =
					// 	new SuccessLogStatementExecutingResult(availables, this, unknowns);
					// yield statementExecutingResult2;
					const statementExecutingResult2: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield statementExecutingResult2;
					break;
				}
			}
		}
		// if (hasFailed) {
		// 	const statementExecutingResult2: FailureLogStatementExecutingResult =
		// 		new FailureLogStatementExecutingResult(availables, this);
		// 	yield statementExecutingResult2;
		// }
	}
	public *mutate(
		functionsHeaders: readonly [
			FunctionHeaderAbstractSyntaxTreeNode,
			...FunctionHeaderAbstractSyntaxTreeNode[],
		],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<OperatedStatementAbstractSyntaxTreeNode, void, void> {
		const this_ = this;
		for (const mutatedOperator of this_.children.operator.mutate()) {
			yield new OperatedStatementAbstractSyntaxTreeNode(
				{operator: mutatedOperator, statement: this_.children.statement},
				new SpanIndexes(0, 0),
			);
		}
		for (const mutatedStatement of this_.children.statement.mutate(
			functionsHeaders,
			unknownsNames,
			userVariablesNames,
		)) {
			yield new OperatedStatementAbstractSyntaxTreeNode(
				{operator: this_.children.operator, statement: mutatedStatement},
				new SpanIndexes(0, 0),
			);
			for (const mutatedOperator of this_.children.operator.mutate()) {
				yield new OperatedStatementAbstractSyntaxTreeNode(
					{operator: mutatedOperator, statement: mutatedStatement},
					new SpanIndexes(0, 0),
				);
			}
		}
	}
}
