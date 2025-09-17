import {knownFunctionHeaderSegmentContentRuleName} from "./name/knownFunctionHeaderSegmentContentRuleName.ts";
import {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment-content/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment-content/atom/KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedOptionalVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-variable-name/PaddedOptionalVariableNameConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionHeaderSegmentContentRule extends Rule<
	KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	KnownFunctionHeaderSegmentContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(knownFunctionHeaderSegmentContentRuleName);
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
		NonTerminalExpression<PaddedOptionalVariableNameConcreteSyntaxTreeNode>,
		NonTerminalExpression<VariableNameConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<PaddedOptionalVariableNameConcreteSyntaxTreeNode>,
			NonTerminalExpression<VariableNameConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<PaddedOptionalVariableNameConcreteSyntaxTreeNode>(
				ruleById.PaddedOptionalVariableName,
			),
			new NonTerminalExpression<VariableNameConcreteSyntaxTreeNode>(
				ruleById.VariableName,
			),
		];
		return rightExpressions;
	}
}
