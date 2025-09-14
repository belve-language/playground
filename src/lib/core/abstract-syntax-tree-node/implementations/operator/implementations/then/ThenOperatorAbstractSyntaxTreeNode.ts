import type {Functions} from "../../../../../non-main-functions/NonMainFunctions.ts";
import {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsAbstractSyntaxTreeNode} from "../../../statements/StatementsAbstractSyntaxTreeNode.ts";
import {OperatorAbstractSyntaxTreeNode} from "../../OperatorAbstractSyntaxTreeNode.ts";
import {OrOperatorAbstractSyntaxTreeNode} from "../or/OrOperatorAbstractSyntaxTreeNode.ts";
export class ThenOperatorAbstractSyntaxTreeNode extends OperatorAbstractSyntaxTreeNode {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
	public override *mutate(): Generator<
		OrOperatorAbstractSyntaxTreeNode,
		void,
		void
	> {
		yield new OrOperatorAbstractSyntaxTreeNode(new SpanIndexes(0, 0));
	}
	public override *operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		nonMainFunctions: NonMainFunctions,
		restStatements: StatementsAbstractSyntaxTreeNode,
		variables: Variables,
	): Generator<SupportedStatementExecutingResult, void, void> {
		const firstStatementExecutingResults = firstStatement.execute(
			functions,
			variables,
		);
		for (const firstStatementExecutingResult of firstStatementExecutingResults) {
			switch (firstStatementExecutingResult.typeName) {
				case stepStatementExecutingResultTypeName: {
					yield firstStatementExecutingResult;
					break;
				}
				case successStatementExecutingResultTypeName: {
					yield firstStatementExecutingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const newVariables: Variables =
						firstStatementExecutingResult.data.variables;
					const combinedVariables: Variables = {...variables, ...newVariables};
					const restStatementsExecutingResults = restStatements.execute(
						functions,
						combinedVariables,
					);
					yield* restStatementsExecutingResults;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					yield firstStatementExecutingResult;
					break;
				}
			}
		}
	}
	public override stringify(): string {
		return ",";
	}
}
