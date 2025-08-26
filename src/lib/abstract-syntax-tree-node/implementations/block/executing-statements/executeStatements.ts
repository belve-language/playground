import type {FunctionAbstractSyntaxTreeNodeChildrenFunctions} from "../../functions/children/functions/FunctionAbstractSyntaxTreeNodeChildrenFunctions.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {BlockAbstractSyntaxTreeNodeChildren} from "../children/BlockAbstractSyntaxTreeNodeChildren.ts";
export function* executeStatements(
	functions: FunctionAbstractSyntaxTreeNodeChildrenFunctions,
	variables: {readonly [variableName: string]: unknown},
	children: BlockAbstractSyntaxTreeNodeChildren,
	depth: number,
): Generator<{readonly [variableName: string]: unknown}, void, void> {
	const [firstInitialOperatedStatement, ...restInitialOperatedStatements] =
		children.initialOperatedStatements;
	if (firstInitialOperatedStatement === undefined) {
		const newVariableses = children.finalStatement.execute(
			functions,
			variables,
			depth,
		);
		for (const newVariables of newVariableses) {
			const combinedVariables = {...variables, ...newVariables};
			yield combinedVariables;
		}
	} else {
		const newVariableses = firstInitialOperatedStatement.execute(
			functions,
			variables,
			depth,
		);
		// if (firstInitialOperatedStatement.children.operator === ".") {
		// 	for (const newVariables of newVariableses) {
		// 		const combinedVariables = {...variables, ...newVariables};
		// 		yield combinedVariables;
		// 	}
		// }
		// const combinedVariableses = executeStatements(
		// 	functions,
		switch (firstInitialOperatedStatement.children.operator) {
			case ".": {
				for (const newVariables of newVariableses) {
					const combinedVariables = {...variables, ...newVariables};
					yield combinedVariables;
				}
				const newCombinedVariableses = executeStatements(
					functions,
					variables,
					{
						finalStatement: children.finalStatement,
						initialOperatedStatements: restInitialOperatedStatements,
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
							finalStatement: children.finalStatement,
							initialOperatedStatements: restInitialOperatedStatements,
						},
						depth,
					);
					yield* newCombinedVariableses;
				}
				break;
			}
		}
	}
	// const newVariableses = firstStatement.execute(functions, variables, depth);
	// // for (const newVariables of newVariableses) {
	// // 	const combinedVariables = {...variables, ...newVariables};
	// // 	if (firstStatement.children.operator === ".") {
	// // 		yield combinedVariables;
	// // 	}
	// // 	switch (firstStatement.children.operator) {
	// // 		case ".": {
	// // 			yield combinedVariables;
	// // 			break;
	// // 		}
	// // 		case ",": {
	// // 			const [firstRestStatement, ...restRestStatements] = restStatements;
	// // 			if (firstRestStatement === undefined) {
	// // 				yield combinedVariables;
	// // 			} else {
	// // 				const restVariableses = executeStatements(
	// // 					functions,
	// // 					combinedVariables,
	// // 					[firstRestStatement, ...restRestStatements],
	// // 					depth,
	// // 				);
	// // 				yield* restVariableses;
	// // 			}
	// // 			break;
	// // 		}
	// // 	}
	// // }
	// // if (firstStatement.children.operator === ".") {
	// // 	const [firstRestStatement, ...restRestStatements] = restStatements;
	// // 	if (firstRestStatement !== undefined) {
	// // 		const restVariableses = executeStatements(
	// // 			functions,
	// // 			variables,
	// // 			[firstRestStatement, ...restRestStatements],
	// // 			depth,
	// // 		);
	// // 		yield* restVariableses;
	// // 	}
	// // }
	// switch (firstStatement.children.operator) {
	// 	// Upewnić się odnośnie logiki
	// 	// a może nie ma jednak być operatora po każdej instrukcji?
	// 	case ".": {
	// 		for (const newVariables of newVariableses) {
	// 			const combinedVariables = {...variables, ...newVariables};
	// 			yield combinedVariables;
	// 		}
	// 		const [firstRestStatement, ...restRestStatements] = restStatements;
	// 		if (firstRestStatement !== undefined) {
	// 			const restVariableses = executeStatements(
	// 				functions,
	// 				variables,
	// 				[firstRestStatement, ...restRestStatements],
	// 				depth,
	// 			);
	// 			yield* restVariableses;
	// 		}
	// 		break;
	// 	}
	// 	case ",": {
	// 		for (const newVariables of newVariableses) {
	// 			const combinedVariables = {...variables, ...newVariables};
	// 			const [firstRestStatement, ...restRestStatements] = restStatements;
	// 			if (firstRestStatement === undefined) {
	// 				yield combinedVariables;
	// 			} else {
	// 				const restVariableses = executeStatements(
	// 					functions,
	// 					combinedVariables,
	// 					[firstRestStatement, ...restRestStatements],
	// 					depth,
	// 				);
	// 				yield* restVariableses;
	// 			}
	// 		}
	// 	}
	// }
}
