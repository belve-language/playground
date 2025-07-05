import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/statements/StatementsConcreteSyntaxTreeNode.ts";
import {subabstractifyStatement} from "../statements-rest-statements/subabstractifying-statenent/subabstractifyStatement.ts";
import {subabstractifyStatementsRestStatements} from "../statements-rest-statements/subabstractifyStatementsRestStatements.ts";
export function subabstractifyStatements(
	statements: StatementsConcreteSyntaxTreeNode,
): readonly [
	BlockAbstractSyntaxTreeNode | FunctionCallAbstractSyntaxTreeNode,
	...OperatedStatementAbstractSyntaxTreeNode[],
] {
	const [statementsFirstStatement, statementsRestStatements] =
		statements.data.children;
	const abstractifiedStatementsFirstStatement:
		| FunctionCallAbstractSyntaxTreeNode
		| BlockAbstractSyntaxTreeNode = subabstractifyStatement(
		statementsFirstStatement,
	);
	if (statementsRestStatements === null) {
		return [abstractifiedStatementsFirstStatement] as const;
	}
	const abstractifiedStatementsRestStatements: readonly [
		OperatedStatementAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = subabstractifyStatementsRestStatements(statementsRestStatements);
	return [
		abstractifiedStatementsFirstStatement,
		...abstractifiedStatementsRestStatements,
	] as const;
}
