import {variableNameRuleName} from "./name/variableNameRuleName.ts";
import {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name/atom/VariableNameConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameRule extends Rule<VariableNameConcreteSyntaxTreeNode> {
	public constructor() {
		super(variableNameRuleName);
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
		NonTerminalExpression<VariableNameSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<VariableNameSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<VariableNameSegmentsConcreteSyntaxTreeNode>(
				ruleById.VariableNameSegments,
			),
		];
		return rightExpressions;
	}
}
