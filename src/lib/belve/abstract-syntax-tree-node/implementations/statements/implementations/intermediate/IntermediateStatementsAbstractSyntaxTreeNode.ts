import type {IntermediateStatementsAbstractSyntaxTreeNodeChildren} from "./children/IntermediateStatementsAbstractSyntaxTreeNodeChildren.ts";
import type {NonMainFunctions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {FailureStatementExecutingResult} from "../../../../../statement-executing-result/implementations/failure/FailureStatementExecutingResult.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import type {SupportedLogStatementExecutingResult} from "../../../../../statement-executing-result/implementations/log/supported/SupportedLogStatementExecutingResult.ts";
import {logStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/log/type-name/logStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {FunctionHeaderAbstractSyntaxTreeNode} from "../../../function-header/FunctionHeaderAbstractSyntaxTreeNode.ts";
import {StatementsAbstractSyntaxTreeNode} from "../../StatementsAbstractSyntaxTreeNode.ts";
export class IntermediateStatementsAbstractSyntaxTreeNode extends StatementsAbstractSyntaxTreeNode<IntermediateStatementsAbstractSyntaxTreeNodeChildren> {
	public constructor(
		children: IntermediateStatementsAbstractSyntaxTreeNodeChildren,
		spanIndexes: SpanIndexes,
	) {
		super(children, spanIndexes);
	}
	public override *execute(
		nonMainFunctions: NonMainFunctions,
		variables: Variables,
	): Generator<
		| FailureStatementExecutingResult
		| ReturnStatementExecutingResult
		| SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const operatedStatement = this.children.operatedStatement;
		const operatedStatementExecutingResults = operatedStatement.execute(
			nonMainFunctions,
			this.children.restStatements,
			variables,
		);
		for (const operatedStatementExecutingResult of operatedStatementExecutingResults) {
			switch (operatedStatementExecutingResult.typeName) {
				case failureStatementExecutingResultTypeName: {
					const intermediateStatementsExecutingResult =
						new FailureStatementExecutingResult();
					yield intermediateStatementsExecutingResult;
					break;
				}
				case logStatementExecutingResultTypeName: {
					const intermediateStatementsExecutingResult =
						operatedStatementExecutingResult;
					// TODO
					// new LogStatementExecutingResult(
					// 	operatedStatementExecutingResult.actionTypeName,
					// 	operatedStatementExecutingResult.node,
					// 	operatedStatementExecutingResult.variables,
					// );
					yield intermediateStatementsExecutingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknowns: Variables = operatedStatementExecutingResult.unknowns;
					const intermediateStatementsExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield intermediateStatementsExecutingResult;
					break;
				}
			}
		}
	}
	public override *mutate(
		functionsHeaders: readonly FunctionHeaderAbstractSyntaxTreeNode[],
		unknownsNames: readonly string[],
		userVariablesNames: readonly string[],
	): Generator<IntermediateStatementsAbstractSyntaxTreeNode, void, void> {
		// TODO
	}
}
