import type {FinalStatementsAbstractSyntaxTreeNodeChildren} from "./children/FinalStatementsAbstractSyntaxTreeNodeChildren.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {LogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/LogStatementExecutingResult.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../../StatementsAbstractSyntaxTreeNode.ts";
export abstract class FinalStatementsAbstractSyntaxTreeNode extends StatementsAbstractSyntaxTreeNode<FinalStatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: FinalStatementsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override *execute(
		nonMainFunctions: NonMainFunctions,
		variables: Variables,
	): Generator<
		LogStatementExecutingResult | ReturnStatementExecutingResult,
		void,
		void
	> {
		const statementExecutingResults = this.children.statement.execute(
			nonMainFunctions,
			variables,
		);
		for (const statementExecutingResult of statementExecutingResults) {
			switch (statementExecutingResult.typeName) {
				case logStatementExecutingResultTypeName: {
					const statementsExecutingResult: LogStatementExecutingResult =
						new LogStatementExecutingResult();
					yield statementsExecutingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const newVariables: Variables =
						statementExecutingResult.data.variables;
					const combinedVariables: Variables = {...variables, ...newVariables};
					const statementsExecutingResult: ReturnStatementExecutingResult =
						new ReturnStatementExecutingResult(combinedVariables);
					yield statementsExecutingResult;
					break;
				}
			}
		}
	}
	public override *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<FinalStatementsAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
}
