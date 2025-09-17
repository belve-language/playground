import {variableNameSegmentCharacterRuleName} from "./name/variableNameSegmentCharacterRuleName.ts";
import {VariableNameSegmentCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-character/VariableNameSegmentCharacterConcreteSyntaxTreeNode.ts";
import type {VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/variable-name-segment-character/atom/VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom.ts";
import type {WordCharacterConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-character/WordCharacterConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class VariableNameSegmentCharacterRule extends Rule<VariableNameSegmentCharacterConcreteSyntaxTreeNode> {
	public constructor() {
		super(variableNameSegmentCharacterRuleName);
	}
	public override buildNode(
		atom: VariableNameSegmentCharacterConcreteSyntaxTreeNodeAtom,
	): VariableNameSegmentCharacterConcreteSyntaxTreeNode {
		const node = new VariableNameSegmentCharacterConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<OperatorCharacterConcreteSyntaxTreeNode>,
		NonTerminalExpression<WordCharacterConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<OperatorCharacterConcreteSyntaxTreeNode>,
			NonTerminalExpression<WordCharacterConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<OperatorCharacterConcreteSyntaxTreeNode>(
				ruleById.OperatorCharacter,
			),
			new NonTerminalExpression<WordCharacterConcreteSyntaxTreeNode>(
				ruleById.WordCharacter,
			),
		];
		return rightExpressions;
	}
}
