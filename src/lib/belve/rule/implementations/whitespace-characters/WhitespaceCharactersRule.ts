import {whitespaceCharactersRuleName} from "./name/whitespaceCharactersRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalWhitespaceCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace-characters/OptionalWhitespaceCharactersConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace-character/WhitespaceCharacterConcreteSyntaxTreeNode.ts";
import {WhitespaceCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace-characters/WhitespaceCharactersConcreteSyntaxTreeNode.ts";
import type {WhitespaceCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/whitespace-characters/atom/WhitespaceCharactersConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WhitespaceCharactersRule extends Rule<
	WhitespaceCharactersConcreteSyntaxTreeNodeAtom,
	WhitespaceCharactersConcreteSyntaxTreeNode
> {
	public constructor() {
		super(whitespaceCharactersRuleName);
	}
	public override buildNode(
		atom: WhitespaceCharactersConcreteSyntaxTreeNodeAtom,
	): WhitespaceCharactersConcreteSyntaxTreeNode {
		const node = new WhitespaceCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WhitespaceCharacterConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalWhitespaceCharactersConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WhitespaceCharacterConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalWhitespaceCharactersConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression<WhitespaceCharacterConcreteSyntaxTreeNode>(
					ruleById.WhitespaceCharacter,
				),
				new NonTerminalExpression<OptionalWhitespaceCharactersConcreteSyntaxTreeNode>(
					ruleById.OptionalWhitespaceCharacters,
				),
			),
		];
		return rightExpressions;
	}
}
