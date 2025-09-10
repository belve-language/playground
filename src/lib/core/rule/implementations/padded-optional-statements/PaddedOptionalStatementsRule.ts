import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-statements/OptionalStatementsConcreteSyntaxTreeNode.ts";
import {PaddedOptionalStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-statements/PaddedOptionalStatementsConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/padded-optional-statements/atom/PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class PaddedOptionalStatementsRule extends Rule<PaddedOptionalStatementsConcreteSyntaxTreeNode> {
	public constructor() {
		super("PaddedOptionalStatements");
	}
	public override buildNode(
		atom: PaddedOptionalStatementsConcreteSyntaxTreeNodeAtom,
	): PaddedOptionalStatementsConcreteSyntaxTreeNode {
		const node = new PaddedOptionalStatementsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStatementsConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStatementsConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.Whitespace),
				new NonTerminalExpression(ruleById.OptionalStatements),
			),
		];
		return rightExpressions;
	}
}
