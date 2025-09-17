import {WordConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word/WordConcreteSyntaxTreeNode.ts";
import type {WordConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/word/atom/WordConcreteSyntaxTreeNodeAtom.ts";
import type {WordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-characters/WordCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import {wordRuleName} from "./name/wordRuleName.ts";
export class WordRule extends Rule<
	WordConcreteSyntaxTreeNodeAtom,
	WordConcreteSyntaxTreeNode
> {
	public constructor() {
		super(wordRuleName);
	}
	public override buildNode(
		atom: WordConcreteSyntaxTreeNodeAtom,
	): WordConcreteSyntaxTreeNode {
		const node = new WordConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>] {
		const rightExpressions: readonly [
			NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>(
				ruleById.WordCharacters,
			),
		];
		return rightExpressions;
	}
}
