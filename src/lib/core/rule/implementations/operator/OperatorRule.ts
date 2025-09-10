import {OperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/operator/OperatorConcreteSyntaxTreeNode.ts";
import type {OperatorConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/operator/atom/OperatorConcreteSyntaxTreeNodeAtom.ts";
import type {OrOperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/or-operator/OrOperatorConcreteSyntaxTreeNode.ts";
import type {ThenOperatorConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/then-operator/ThenOperatorConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OperatorRule extends Rule<OperatorConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OperatorConcreteSyntaxTreeNodeAtom,
	): OperatorConcreteSyntaxTreeNode {
		const node = new OperatorConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<ThenOperatorConcreteSyntaxTreeNode>,
		NonTerminalExpression<OrOperatorConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<ThenOperatorConcreteSyntaxTreeNode>,
			NonTerminalExpression<OrOperatorConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.ThenOperator),
			new NonTerminalExpression(ruleById.OrOperator),
		];
		return rightExpressions;
	}
}
