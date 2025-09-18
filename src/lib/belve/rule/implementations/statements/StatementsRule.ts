import {statementsRuleName} from "./name/statementsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalSeparatedStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-separated-statements/OptionalSeparatedStatementsConcreteSyntaxTreeNode.ts";
import type {StatementConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statement/StatementConcreteSyntaxTreeNode.ts";
import {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statements/StatementsConcreteSyntaxTreeNode.ts";
import type {StatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/statements/atom/StatementsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StatementsRule extends Rule<
	StatementsConcreteSyntaxTreeNodeAtom,
	StatementsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(statementsRuleName);
	}
	public override buildNode(
		atom: StatementsConcreteSyntaxTreeNodeAtom,
	): StatementsConcreteSyntaxTreeNode {
		const node = new StatementsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<StatementConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalSeparatedStatementsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<StatementConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalSeparatedStatementsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<StatementConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalSeparatedStatementsConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<StatementConcreteSyntaxTreeNode>(
					ruleById.Statement,
				),
				new NonTerminalExpression<OptionalSeparatedStatementsConcreteSyntaxTreeNode>(
					ruleById.OptionalSeparatedStatements,
				),
			),
		];
		return rightExpressions;
	}
}
