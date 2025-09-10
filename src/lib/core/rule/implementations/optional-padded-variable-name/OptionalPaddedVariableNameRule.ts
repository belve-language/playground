import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-padded-variable-name/OptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-padded-variable-name/atom/OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalPaddedVariableNameRule extends Rule<OptionalPaddedVariableNameConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalPaddedVariableName");
	}
	public override buildNode(
		atom: OptionalPaddedVariableNameConcreteSyntaxTreeNodeAtom,
	): OptionalPaddedVariableNameConcreteSyntaxTreeNode {
		const node = new OptionalPaddedVariableNameConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<PaddedVariableNameConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<PaddedVariableNameConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.PaddedVariableName),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
