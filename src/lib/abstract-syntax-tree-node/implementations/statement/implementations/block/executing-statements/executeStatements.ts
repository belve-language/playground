import type {Statements} from "../../../../../../../statements/Statements.ts";
import type {Functions} from "../../../../../../functions/Functions.ts";
import {failureStatementExecutingResultTypeName} from "../../../../../../statement-executing-result/implementations/failure/type-name/failureStatementExecutingResultTypeName.ts";
import {ReturnStatementExecutingResult} from "../../../../../../statement-executing-result/implementations/return/ReturnStatementExecutingResult.ts";
import {returnStatementExecutingResultTypeName} from "../../../../../../statement-executing-result/implementations/return/type-name/returnStatementExecutingResultTypeName.ts";
import {stepStatementExecutingResultTypeName} from "../../../../../../statement-executing-result/implementations/step/type-name/stepStatementExecutingResultTypeName.ts";
import {successStatementExecutingResultTypeName} from "../../../../../../statement-executing-result/implementations/success/type-name/successStatementExecutingResultTypeName.ts";
import type {SupportedStatementExecutingResult} from "../../../../../../statement-executing-result/supported/SupportedStatementExecutingResult.ts";
import type {Variables} from "../../../../../../variables/Variables.ts";
export function* executeStatements(
	functions: Functions,
	variables: Variables,
	statements: Statements,
): Generator<SupportedStatementExecutingResult, void, void> {
	const [firstOperatedStatement, ...restInitialOperatedStatements] =
		statements.initialOperatedStatements;
	if (firstOperatedStatement === undefined) {
		const lastStatementExecutingResults = statements.lastStatement.execute(
			functions,
			variables,
		);
		for (const lastStatementExecutingResult of lastStatementExecutingResults) {
			switch (lastStatementExecutingResult.typeName) {
				case stepStatementExecutingResultTypeName: {
					yield lastStatementExecutingResult;
					break;
				}
				case successStatementExecutingResultTypeName: {
					yield lastStatementExecutingResult;
					break;
				}
				case returnStatementExecutingResultTypeName: {
					const newVariables: Variables =
						lastStatementExecutingResult.data.variables;
					const combinedVariables: Variables = {...variables, ...newVariables};
					const statementsExecutingResult = new ReturnStatementExecutingResult(
						combinedVariables,
					);
					yield statementsExecutingResult;
					break;
				}
				case failureStatementExecutingResultTypeName: {
					yield lastStatementExecutingResult;
					break;
				}
			}
		}
	} else {
		const firstOperatedStatementExecutingResults =
			firstOperatedStatement.execute(
				functions,
				{
					initialOperatedStatements: restInitialOperatedStatements,
					lastStatement: statements.lastStatement,
				},
				variables,
			);
		yield* firstOperatedStatementExecutingResults;
	}
}
