import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalWhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace/OptionalWhitespaceConcreteSyntaxTreeNode.ts";
import {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/atom/PaddedVariableNameConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class PaddedVariableNameRule extends Rule<PaddedVariableNameConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: PaddedVariableNameConcreteSyntaxTreeNodeAtom,
	): PaddedVariableNameConcreteSyntaxTreeNode {
		const node = new PaddedVariableNameConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<VariableNameConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<VariableNameConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalWhitespaceConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.VariableName),
				new NonTerminalExpression(ruleById.OptionalWhitespace),
			),
		];
		return rightExpressions;
	}
}
