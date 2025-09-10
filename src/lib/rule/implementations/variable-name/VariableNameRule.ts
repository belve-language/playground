import {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name/atom/VariableNameConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-characters/VariableNameCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameRule extends Rule<VariableNameConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: VariableNameConcreteSyntaxTreeNodeAtom,
	): VariableNameConcreteSyntaxTreeNode {
		const node = new VariableNameConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<VariableNameCharactersConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<VariableNameCharactersConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression(ruleById.VariableNameCharacters)];
		return rightExpressions;
	}
}
