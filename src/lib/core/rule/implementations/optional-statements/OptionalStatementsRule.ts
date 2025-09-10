import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-statements/OptionalStatementsConcreteSyntaxTreeNode.ts";
import type {OptionalStatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-statements/atom/OptionalStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statements/StatementsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStatementsRule extends Rule<OptionalStatementsConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalStatements");
	}
	public override buildNode(
		atom: OptionalStatementsConcreteSyntaxTreeNodeAtom,
	): OptionalStatementsConcreteSyntaxTreeNode {
		const node = new OptionalStatementsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StatementsConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StatementsConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.Statements),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
