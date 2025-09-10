import type {Statements} from "../../../../../../statements/Statements.ts";
import type {Functions} from "../../../../../functions/Functions.ts";
import type {SpanIndexes} from "../../../../../span-indexes/SpanIndexes.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../variables/Variables.ts";
import {executeStatements} from "../../../statement/implementations/block/executing-statements/executeStatements.ts";
import type {SupportedStatementAbstractSyntaxTreeNode} from "../../../statement/supported/SupportedStatementAbstractSyntaxTreeNode.ts";
import {OperatorAbstractSyntaxTreeNode} from "../../OperatorAbstractSyntaxTreeNode.ts";
export class ThenOperatorAbstractSyntaxTreeNode extends OperatorAbstractSyntaxTreeNode {
	public constructor(spanIndexes: SpanIndexes) {
		super(spanIndexes);
	}
	public override *operate(
		firstStatement: SupportedStatementAbstractSyntaxTreeNode,
		functions: Functions,
		restStatements: Statements,
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
					const restStatementsExecutingResults = executeStatements(
						functions,
						combinedVariables,
						restStatements,
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
}
