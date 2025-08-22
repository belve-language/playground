import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
export function* executeStatements(
	functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	variables: {readonly [variableName: string]: unknown},
	statements: readonly [
		OperatedStatementAbstractSyntaxTreeNode,
		...(readonly OperatedStatementAbstractSyntaxTreeNode[]),
	],
): Generator<{readonly [variableName: string]: unknown}, void, void> {
	const [firstStatement, ...restStatements] = statements;
	const newVariableses = firstStatement.execute(functions, variables);
	for (const newVariables of newVariableses) {
		const [firstRestStatement, ...restRestStatements] = restStatements;
		const combinedVariables = {...variables, ...newVariables};
		if (firstRestStatement === undefined) {
			yield combinedVariables;
		} else {
			const restVariableses = executeStatements(functions, combinedVariables, [
				firstRestStatement,
				...restRestStatements,
			]);
			yield* restVariableses;
		}
	}
}
