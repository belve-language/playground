import type {Statement} from "../../../statement/Statement.ts";
import type {FunctionAbstractSyntaxTreeNodeDataFunctions} from "../../functions/data/functions/FunctionAbstractSyntaxTreeNodeDataFunctions.ts";
export function executeStatements(
	functions: FunctionAbstractSyntaxTreeNodeDataFunctions,
	knownsStack: readonly [
		{readonly [variableName: string]: unknown},
		...(readonly {readonly [variableName: string]: unknown}[]),
	],
	statements: readonly Statement[],
): null | {readonly [variableName: string]: unknown} {
	const [firstStatement, ...restStatements] = statements;
	if (firstStatement === undefined) {
		return {};
	} else {
		const unknowns = firstStatement.execute(functions, knownsStack);
		if (unknowns === null) {
			return null;
		} else {
			return executeStatements(
				functions,
				[{...knownsStack[0], ...unknowns}, ...knownsStack.slice(1)],
				restStatements,
			);
		}
	}
}
