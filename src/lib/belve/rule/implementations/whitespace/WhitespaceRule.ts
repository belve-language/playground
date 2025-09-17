import {whitespaceRuleName} from "./name/whitespaceRuleName.ts";
import {WhitespaceConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace/WhitespaceConcreteSyntaxTreeNode.ts";
import type {WhitespaceConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/whitespace/atom/WhitespaceConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace-characters/WhitespaceCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class WhitespaceRule extends Rule<
	WhitespaceConcreteSyntaxTreeNodeAtom,
	WhitespaceConcreteSyntaxTreeNode
> {
	public constructor() {
		super(whitespaceRuleName);
	}
	public override buildNode(
		atom: WhitespaceConcreteSyntaxTreeNodeAtom,
	): WhitespaceConcreteSyntaxTreeNode {
		const node = new WhitespaceConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<WhitespaceCharactersConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<WhitespaceCharactersConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<WhitespaceCharactersConcreteSyntaxTreeNode>(
				ruleById.WhitespaceCharacters,
			),
		];
		return rightExpressions;
	}
}
