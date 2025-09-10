import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {ThenAtom} from "../../../atom/implementations/then/ThenAtom.ts";
import type {OperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/operator/OperatorConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import {SeparatedStatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-statements/SeparatedStatementsConcreteSyntaxTreeNode.ts";
import type {SeparatedStatementsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/separated-statements/atom/SeparatedStatementsConcreteSyntaxTreeNodeAtom.ts";
import type {StatementsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/statements/StatementsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class SeparatedStatementsRule extends Rule<SeparatedStatementsConcreteSyntaxTreeNode> {
	public constructor() {
		super("SeparatedStatements");
	}
	public override buildNode(
		atom: SeparatedStatementsConcreteSyntaxTreeNodeAtom,
	): SeparatedStatementsConcreteSyntaxTreeNode {
		const node = new SeparatedStatementsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<OperatorConcreteSyntaxTreeNode>,
			ThenAtom<
				NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>,
				NonTerminalAtom<StatementsConcreteSyntaxTreeNode>
			>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<OperatorConcreteSyntaxTreeNode>,
				ThenAtom<
					NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>,
					NonTerminalAtom<StatementsConcreteSyntaxTreeNode>
				>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.Operator),
				new ThenExpression(
					new NonTerminalExpression(ruleById.OptionalWhitespace),
					new NonTerminalExpression(ruleById.Statements),
				),
			),
		];
		return rightExpressions;
	}
}
