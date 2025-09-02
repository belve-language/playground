import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "../children/BlockAbstractSyntaxTreeNodeChildren.ts";
export function* executeStatements(
	functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	variables: {readonly [variableName: string]: unknown},
	children: BlockAbstractSyntaxTreeNodeChildren,
	depth: number,
): Generator<{readonly [variableName: string]: unknown}, void, void> {
	// const [firstInitialOperatedStatement, ...restInitialOperatedStatements] =
	// 	children.initialOperatedStatements;
	// if (firstInitialOperatedStatement === undefined) {
	// 	const newVariableses = children.finalStatement.execute(
	// 		functions,
	// 		variables,
	// 		depth,
	// 	);
	// 	for (const newVariables of newVariableses) {
	// 		const combinedVariables = {...variables, ...newVariables};
	// 		yield combinedVariables;
	// 	}
	// } else {
	// 	const newVariableses = firstInitialOperatedStatement.execute(
	// 		functions,
	// 		variables,
	// 		depth,
	// 	);
	// 	switch (firstInitialOperatedStatement.children.operator) {
	// 		case ".": {
	// 			for (const newVariables of newVariableses) {
	// 				const combinedVariables = {...variables, ...newVariables};
	// 				yield combinedVariables;
	// 			}
	// 			const newCombinedVariableses = executeStatements(
	// 				functions,
	// 				variables,
	// 				{
	// 					finalStatement: children.finalStatement,
	// 					initialOperatedStatements: restInitialOperatedStatements,
	// 				},
	// 				depth,
	// 			);
	// 			yield* newCombinedVariableses;
	// 			break;
	// 		}
	// 		case ",": {
	// 			for (const newVariables of newVariableses) {
	// 				const combinedVariables = {...variables, ...newVariables};
	// 				const newCombinedVariableses = executeStatements(
	// 					functions,
	// 					combinedVariables,
	// 					{
	// 						finalStatement: children.finalStatement,
	// 						initialOperatedStatements: restInitialOperatedStatements,
	// 					},
	// 					depth,
	// 				);
	// 				yield* newCombinedVariableses;
	// 			}
	// 			break;
	// 		}
	// 	}
	// }
	// refactor because now we get initialStatement and finalOperatedStatements
	const newVariableses = children.initialStatement.execute(
		functions,
		variables,
		depth,
	);
	const [firstFinalOperatedStatement, ...restFinalOperatedStatements] =
		children.finalOperatedStatements;
	if (firstFinalOperatedStatement === undefined) {
		for (const newVariables of newVariableses) {
			const combinedVariables = {...variables, ...newVariables};
			yield combinedVariables;
		}
	} else {
		switch (firstFinalOperatedStatement.children.operator) {
			case ".": {
				for (const newVariables of newVariableses) {
					const combinedVariables = {...variables, ...newVariables};
					yield combinedVariables;
				}
				const newCombinedVariableses = executeStatements(
					functions,
					variables,
					{
						finalOperatedStatements: restFinalOperatedStatements,
						initialStatement: firstFinalOperatedStatement.children.statement,
					},
					depth,
				);
				yield* newCombinedVariableses;
				break;
			}
			case ",": {
				for (const newVariables of newVariableses) {
					const combinedVariables = {...variables, ...newVariables};
					const newCombinedVariableses = executeStatements(
						functions,
						combinedVariables,
						{
							finalOperatedStatements: restFinalOperatedStatements,
							initialStatement: firstFinalOperatedStatement.children.statement,
						},
						depth,
					);
					yield* newCombinedVariableses;
				}
				break;
			}
		}
	}
}
