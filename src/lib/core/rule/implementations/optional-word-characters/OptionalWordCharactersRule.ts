import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalWordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-word-characters/OptionalWordCharactersConcreteSyntaxTreeNode.ts";
import type {OptionalWordCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-word-characters/atom/OptionalWordCharactersConcreteSyntaxTreeNodeAtom.ts";
import type {WordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-characters/WordCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalWordCharactersRule extends Rule<OptionalWordCharactersConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalWordCharacters");
	}
	public override buildNode(
		atom: OptionalWordCharactersConcreteSyntaxTreeNodeAtom,
	): OptionalWordCharactersConcreteSyntaxTreeNode {
		const node = new OptionalWordCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.WordCharacters),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
