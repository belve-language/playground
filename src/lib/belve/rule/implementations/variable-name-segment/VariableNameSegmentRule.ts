import {variableNameSegmentRuleName} from "./name/variableNameSegmentRuleName.ts";
import {VariableNameSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment/VariableNameSegmentConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment/atom/VariableNameSegmentConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameSegmentCharactersConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-characters/VariableNameSegmentCharactersConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameSegmentRule extends Rule<
	VariableNameSegmentConcreteSyntaxTreeNodeAtom,
	VariableNameSegmentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(variableNameSegmentRuleName);
	}
	public override buildNode(
		atom: VariableNameSegmentConcreteSyntaxTreeNodeAtom,
	): VariableNameSegmentConcreteSyntaxTreeNode {
		const node = new VariableNameSegmentConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<VariableNameSegmentCharactersConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<VariableNameSegmentCharactersConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<VariableNameSegmentCharactersConcreteSyntaxTreeNode>(
				ruleById.VariableNameSegmentCharacters,
			),
		];
		return rightExpressions;
	}
}
