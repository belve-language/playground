import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "./children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import type {BlockStatementConcreteSyntaxTreeNode} from "../../../../../concrete-syntax-tree-node/implementations/block-statement/BlockStatementConcreteSyntaxTreeNode.ts";
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
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {StatementAbstractSyntaxTreeNode} from "../../StatementAbstractSyntaxTreeNode.ts";
export class BlockStatementAbstractSyntaxTreeNode extends StatementAbstractSyntaxTreeNode<BlockStatementAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: BlockStatementAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public concretify(): BlockStatementConcreteSyntaxTreeNode {
		// TODO
		throw new Error("Method not implemented.");
	}
	public override *execute(
		availables: Variables,
		nonMainFunctions: NonMainFunctions<Function>,
	): Generator<
		ReturnStatementExecutingResult | SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const blockStatementExecutingResult1 = new StepLogStatementExecutingResult(
			availables,
			this,
		);
		yield blockStatementExecutingResult1;
		const statementsExecutingResults = this.children.statements.execute(
			availables,
			nonMainFunctions,
		);
		let hasFailed = true;
		for (const statementsExecutingResult of statementsExecutingResults) {
			switch (statementsExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					switch (statementsExecutingResult.actionTypeName) {
						case failureLogStatementExecutingResultActionTypeName: {
							const blockStatementExecutingResult2: FailureLogStatementExecutingResult =
								new FailureLogStatementExecutingResult(
									statementsExecutingResult.availables,
									statementsExecutingResult.node,
								);
							yield blockStatementExecutingResult2;
							break;
						}
						case stepLogStatementExecutingResultActionTypeName: {
							const blockStatementExecutingResult2: StepLogStatementExecutingResult =
								new StepLogStatementExecutingResult(
									statementsExecutingResult.availables,
									statementsExecutingResult.node,
								);
							yield blockStatementExecutingResult2;
							break;
						}
						case successLogStatementExecutingResultActionTypeName: {
							const blockStatementExecutingResult2: SuccessLogStatementExecutingResult =
								new SuccessLogStatementExecutingResult(
									statementsExecutingResult.availables,
									statementsExecutingResult.node,
									statementsExecutingResult.unknowns,
								);
							yield blockStatementExecutingResult2;
							break;
						}
					}
					break;
				}
				case returnStatementExecutingResultTypeName: {
					hasFailed = false;
					const unknowns: Variables = statementsExecutingResult.unknowns;
					const blockStatementExecutingResult2: SuccessLogStatementExecutingResult =
						new SuccessLogStatementExecutingResult(availables, this, unknowns);
					yield blockStatementExecutingResult2;
					const blockStatementExecutingResult3: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield blockStatementExecutingResult3;
					break;
				}
			}
		}
		if (hasFailed) {
			const blockStatementExecutingResult2: FailureLogStatementExecutingResult =
				new FailureLogStatementExecutingResult(availables, this);
			yield blockStatementExecutingResult2;
		}
	}
	public lint(): readonly string[] {
		// TODO
		throw new Error("Method not implemented.");
	}
	public override *mutate(
		nonMainFunctionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<BlockStatementAbstractSyntaxTreeNode, void, void> {
		for (const mutatedStatements of this.children.statements.mutate(
			nonMainFunctionsHeaders,
			unknownsNames,
			userVariablesNames,
		)) {
			const mutatedBlockStatement = new BlockStatementAbstractSyntaxTreeNode(
				{statements: mutatedStatements},
				new SpanIndexes(0, 0),
			);
			yield mutatedBlockStatement;
		}
	}
}
