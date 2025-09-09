import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalWordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-word-characters/OptionalWordCharactersConcreteSyntaxTreeNode.ts";
import type {WordCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-character/WordCharacterConcreteSyntaxTreeNode.ts";
import {WordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-characters/WordCharactersConcreteSyntaxTreeNode.ts";
import type {WordCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/word-characters/atom/WordCharactersConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WordCharactersRule extends Rule<WordCharactersConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: WordCharactersConcreteSyntaxTreeNodeAtom,
	): WordCharactersConcreteSyntaxTreeNode {
		const node = new WordCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WordCharacterConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalWordCharactersConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WordCharacterConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalWordCharactersConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.WordCharacter),
				new NonTerminalExpression(ruleById.OptionalWordCharacters),
			),
		];
		return rightExpressions;
	}
}
