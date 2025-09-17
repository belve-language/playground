import {unknownFunctionCallStatementSegmentContentRuleName} from "./name/unknownFunctionCallStatementSegmentContentRuleName.ts";
import type {PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-padded-variable-name/PaddedOptionalPaddedVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedOptionalVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-optional-variable-name/PaddedOptionalVariableNameConcreteSyntaxTreeNode.ts";
import type {PaddedVariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/padded-variable-name/PaddedVariableNameConcreteSyntaxTreeNode.ts";
import {UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-statement-segment-content/UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import type {UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-statement-segment-content/atom/UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {VariableNameConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/variable-name/VariableNameConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class UnknownFunctionCallStatementSegmentContentRule extends Rule<
	UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(unknownFunctionCallStatementSegmentContentRuleName);
	}
	public override buildNode(
		atom: UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	): UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode {
		const node =
			new UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode(
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
