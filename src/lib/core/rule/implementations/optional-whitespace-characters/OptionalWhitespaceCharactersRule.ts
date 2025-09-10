import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalWhitespaceCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace-characters/OptionalWhitespaceCharactersConcreteSyntaxTreeNode.ts";
import type {OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-whitespace-characters/atom/OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom.ts";
import type {WhitespaceCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/whitespace-characters/WhitespaceCharactersConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalWhitespaceCharactersRule extends Rule<OptionalWhitespaceCharactersConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalWhitespaceCharactersConcreteSyntaxTreeNodeAtom,
	): OptionalWhitespaceCharactersConcreteSyntaxTreeNode {
		const node = new OptionalWhitespaceCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<WhitespaceCharactersConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<WhitespaceCharactersConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.WhitespaceCharacters),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
