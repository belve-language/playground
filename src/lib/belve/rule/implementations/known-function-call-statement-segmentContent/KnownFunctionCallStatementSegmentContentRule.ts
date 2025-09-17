import {knownFunctionCallStatementSegmentContentRuleName} from "./name/knownFunctionCallStatementSegmentContentRuleName.ts";
import {KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-statement-segment-content/KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/known-function-call-statement-segment-content/atom/KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {PaddedOptionalVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-variable-name/PaddedOptionalVariableNameConcreteSyntaxTreeNode.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class KnownFunctionCallStatementSegmentContentRule extends Rule<
	KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(knownFunctionCallStatementSegmentContentRuleName);
	}
	public override buildNode(
		atom: KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	): KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode {
		const node =
			new KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode(atom);
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
