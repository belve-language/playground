import {unknownFunctionHeaderSegmentContentRuleName} from "./name/unknownFunctionHeaderSegmentContentRuleName.ts";
import type {PaddedOptionalVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-variable-name/PaddedOptionalVariableNameConcreteSyntaxTreeNode.ts";
import {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment-content/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment-content/atom/UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class UnknownFunctionHeaderSegmentContentRule extends Rule<
	UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNodeAtom,
	UnknownFunctionHeaderSegmentContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(unknownFunctionHeaderSegmentContentRuleName);
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
