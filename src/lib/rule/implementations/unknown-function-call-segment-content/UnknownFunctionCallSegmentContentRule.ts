import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import {UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-segment-content/UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-segment-content/atom/UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
import type {PaddedOptionalPaddedVariableNameRule} from "../padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameRule.ts";
import type {PaddedVariableNameRule} from "../padded-variable-name/PaddedVariableNameRule.ts";
export class UnknownFunctionCallSegmentContentRule extends Rule<UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: UnknownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
	): UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode {
		const node = new UnknownFunctionCallSegmentContentConcreteSyntaxTreeNode(
			atom,
		);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode>,
		NonTerminalExpression<PaddedVariableNameConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode>,
			NonTerminalExpression<PaddedVariableNameConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.PaddedOptionalPaddedVariableName),
			new NonTerminalExpression(ruleById.PaddedVariableName),
		];
		return rightExpressions;
	}
}
