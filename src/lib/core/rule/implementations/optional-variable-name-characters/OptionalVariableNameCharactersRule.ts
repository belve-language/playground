import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalVariableNameCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-characters/OptionalVariableNameCharactersConcreteSyntaxTreeNode.ts";
import type {OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-variable-name-characters/atom/OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-characters/VariableNameCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalVariableNameCharactersRule extends Rule<OptionalVariableNameCharactersConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalVariableNameCharacters");
	}
	public override buildNode(
		atom: OptionalVariableNameCharactersConcreteSyntaxTreeNodeAtom,
	): OptionalVariableNameCharactersConcreteSyntaxTreeNode {
		const node = new OptionalVariableNameCharactersConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<VariableNameCharactersConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<VariableNameCharactersConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.VariableNameCharacters),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
