import type {FinalStatementsAbstractSyntaxTreeNodeChildren} from "./children/FinalStatementsAbstractSyntaxTreeNodeChildren.ts";
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
export class FinalStatementsAbstractSyntaxTreeNode extends StatementsAbstractSyntaxTreeNode<FinalStatementsAbstractSyntaxTreeNodeChildren> {
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
		| FailureStatementExecutingResult
		| ReturnStatementExecutingResult
		| SupportedLogStatementExecutingResult,
		void,
		void
	> {
		const statement = this.children.statement;
		const statementExecutingResults = statement.execute(
			nonMainFunctions,
			variables,
		);
		for (const statementExecutingResult of statementExecutingResults) {
			switch (statementExecutingResult.typeName) {
				case failureStatementExecutingResultTypeName: {
					const finalStatementsExecutingResult =
						new FailureStatementExecutingResult();
					yield finalStatementsExecutingResult;
					break;
				}
				case logStatementExecutingResultTypeName: {
					const finalStatementsExecutingResult = statementExecutingResult;
					// TODO FOR STACKTRAXE
					// new LogStatementExecutingResult(
					// 	statementExecutingResult.actionTypeName,
					// 	statementExecutingResult.node,
					// 	statementExecutingResult.variables,
					// );
					yield finalStatementsExecutingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const unknowns: Variables = statementExecutingResult.unknowns;
					const finalStatementsExecutingResult =
						new ReturnStatementExecutingResult(unknowns);
					yield finalStatementsExecutingResult;
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
