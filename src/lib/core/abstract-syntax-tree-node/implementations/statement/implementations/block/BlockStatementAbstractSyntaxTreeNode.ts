import type {BlockStatementAbstractSyntaxTreeNodeChildren} from "./children/BlockStatementAbstractSyntaxTreeNodeChildren.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {StepStatementExecutingResult} from "../../../../../statement-executing-result/implementations/step/StepStatementExecutingResult.ts";
import {SuccessStatementExecutingResult} from "../../../../../statement-executing-result/implementations/success/SuccessStatementExecutingResult.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
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
	public override *execute(
		nonMainFunctions: NonMainFunctions,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		yield new StepStatementExecutingResult(this, variables);
		const statements = this.children.statements;
		const statementsExecutingResults = statements.execute(
			nonMainFunctions,
			variables,
		);
		let hasFailed = true;
		for (const statementsExecutingResult of statementsExecutingResults) {
			if (
				statementsExecutingResult.typeName
				=== returnStatementExecutingResultTypeName
			) {
				hasFailed = false;
				const blockStatementExecutingResult =
					new SuccessStatementExecutingResult(
						this,
						statementsExecutingResult.data.variables,
					);
				yield blockStatementExecutingResult;
			}
			yield statementsExecutingResult;
		}
		if (hasFailed) {
			yield new FailureStatementExecutingResult(this, variables);
		}
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
