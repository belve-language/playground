import {optionalUnknownFunctionCallStatementSegmentContentRuleName} from "./name/optionalUnknownFunctionCallStatementSegmentContentRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-call-statement-segment-content/OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import type {OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-unknown-function-call-statement-segment-content/atom/OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-statement-segment-content/UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalUnknownFunctionCallStatementSegmentContentRule extends Rule<
	OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalUnknownFunctionCallStatementSegmentContentRuleName);
	}
	public override buildNode(
		atom: OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	): OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode {
		const node =
			new OptionalUnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<UnknownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>(
				ruleById.UnknownFunctionCallStatementSegmentContent,
			),
		];
		return rightExpressions;
	}
}
