import {KnownFunctionCallSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-segment-content/KnownFunctionCallSegmentContentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-call-segment-content/atom/KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionCallSegmentContentRule extends Rule<KnownFunctionCallSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super("KnownFunctionCallSegmentContent");
	}
	public override buildNode(
		atom: KnownFunctionCallSegmentContentConcreteSyntaxTreeNodeAtom,
	): KnownFunctionCallSegmentContentConcreteSyntaxTreeNode {
		const node = new KnownFunctionCallSegmentContentConcreteSyntaxTreeNode(
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
