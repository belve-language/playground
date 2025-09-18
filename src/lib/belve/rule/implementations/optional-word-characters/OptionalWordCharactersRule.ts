import {optionalWordCharactersRuleName} from "./name/optionalWordCharactersRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalWordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-word-characters/OptionalWordCharactersConcreteSyntaxTreeNode.ts";
import type {OptionalWordCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-word-characters/atom/OptionalWordCharactersConcreteSyntaxTreeNodeAtom.ts";
import type {WordCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-characters/WordCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalWordCharactersRule extends Rule<
	OptionalWordCharactersConcreteSyntaxTreeNodeAtom,
	OptionalWordCharactersConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalWordCharactersRuleName);
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
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<WordCharactersConcreteSyntaxTreeNode>(
				ruleById.WordCharacters,
			),
		];
		return rightExpressions;
	}
}
