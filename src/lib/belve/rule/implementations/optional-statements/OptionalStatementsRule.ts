import {optionalStatementsRuleName} from "./name/optionalStatementsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-statements/OptionalStatementsConcreteSyntaxTreeNode.ts";
import type {OptionalStatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-statements/atom/OptionalStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statements/StatementsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStatementsRule extends Rule<
	OptionalStatementsConcreteSyntaxTreeNodeAtom,
	OptionalStatementsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStatementsRuleName);
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
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<StatementsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<StatementsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<StatementsConcreteSyntaxTreeNode>(
				ruleById.Statements,
			),
		];
		return rightExpressions;
	}
}
