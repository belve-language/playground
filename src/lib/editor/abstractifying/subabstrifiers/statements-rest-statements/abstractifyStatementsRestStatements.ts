import type {BlockAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/block/BlockAbstractSyntaxTreeNode.ts";
import type {FunctionCallAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/function-call/FunctionCallAbstractSyntaxTreeNode.ts";
import {createOperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/operated-statement/creating/createOperatedStatementAbstractSyntaxTreeNode.ts";
import type {OperatedStatementAbstractSyntaxTreeNode} from "../../../abstract-syntax-tree/node/kinds/operated-statement/OperatedStatementAbstractSyntaxTreeNode.ts";
import type {StatementsRestStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree/node/kinds/statements-rest-statements/StatementsRestStatementsConcreteSyntaxTreeNode.ts";
import {subabstractifyOperator} from "../operator/subabstractifyOperator.ts";
import {subabstractifyStatement} from "./subabstractifying-statenent/subabstractifyStatement.ts";
export function subabstractifyStatementsRestStatements(
	statements: StatementsRestStatementsConcreteSyntaxTreeNode,
): readonly [
	OperatedStatementAbstractSyntaxTreeNode,
	...OperatedStatementAbstractSyntaxTreeNode[],
] {
	const [, statementsOperator, , statementsStatements] =
		statements.data.children;
	const abstractifiedStatementsOperator =
		subabstractifyOperator(statementsOperator);
	const [
		statementsStatementsFirstStatement,
		statementsStatementsRestStatement,
	] = statementsStatements.data.children;
	const abstractifiedFirstStatement:
		| FunctionCallAbstractSyntaxTreeNode
		| BlockAbstractSyntaxTreeNode = subabstractifyStatement(
		statementsStatementsFirstStatement,
	);
	const abstractifiedOperatedStatementsStatementsFirstStatement: OperatedStatementAbstractSyntaxTreeNode =
		createOperatedStatementAbstractSyntaxTreeNode(
			abstractifiedStatementsOperator,
			abstractifiedFirstStatement,
		);
	if (statementsStatementsRestStatement === null) {
		return [abstractifiedOperatedStatementsStatementsFirstStatement];
	}
	const abstractifiedStatementsStatementsRestStatement: readonly [
		OperatedStatementAbstractSyntaxTreeNode,
		...OperatedStatementAbstractSyntaxTreeNode[],
	] = subabstractifyStatementsRestStatements(statementsStatementsRestStatement);
	return [
		abstractifiedOperatedStatementsStatementsFirstStatement,
		...abstractifiedStatementsStatementsRestStatement,
	];
}
