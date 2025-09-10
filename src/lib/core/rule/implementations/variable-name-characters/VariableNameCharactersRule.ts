import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalVariableNameCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-characters/OptionalVariableNameCharactersConcreteSyntaxTreeNode.ts";
import type {VariableNameCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-character/VariableNameCharacterConcreteSyntaxTreeNode.ts";
import {VariableNameCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-characters/VariableNameCharactersConcreteSyntaxTreeNode.ts";
import type {VariableNameCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name-characters/atom/VariableNameCharactersConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameCharactersRule extends Rule<VariableNameCharactersConcreteSyntaxTreeNode> {
	public constructor() {
		super("VariableNameCharacters");
	}
	public override buildNode(
		atom: VariableNameCharactersConcreteSyntaxTreeNodeAtom,
	): VariableNameCharactersConcreteSyntaxTreeNode {
		const node = new VariableNameCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<VariableNameCharacterConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalVariableNameCharactersConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<VariableNameCharacterConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalVariableNameCharactersConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.VariableNameCharacter),
				new NonTerminalExpression(ruleById.OptionalVariableNameCharacters),
			),
		];
		return rightExpressions;
	}
}
