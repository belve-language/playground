import {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment-content/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment-content/atom/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionHeaderSegmentContentRule extends Rule<KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	): KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode {
		const node = new KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode(
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
