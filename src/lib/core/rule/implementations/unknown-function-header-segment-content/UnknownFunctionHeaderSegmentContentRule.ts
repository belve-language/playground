import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment-content/atom/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class UnknownFunctionHeaderSegmentContentRule extends Rule<UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super("UnknownFunctionHeaderSegmentContent");
	}
	public override buildNode(
		atom: UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	): UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode {
		const node = new UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode(
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
