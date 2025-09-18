import {optionalKnownFunctionCallStatementSegmentContentRuleName} from "./name/optionalKnownFunctionCallStatementSegmentContentRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-statement-segment-content/KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import {OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-call-statement-segment-content/OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode.ts";
import type {OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-known-function-call-statement-segment-content/atom/OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalKnownFunctionCallStatementSegmentContentRule extends Rule<
	OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalKnownFunctionCallStatementSegmentContentRuleName);
	}
	public override buildNode(
		atom: OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNodeAtom,
	): OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode {
		const node =
			new OptionalKnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<KnownFunctionCallStatementSegmentContentConcreteSyntaxTreeNode>(
				ruleById.KnownFunctionCallStatementSegmentContent,
			),
		];
		return rightExpressions;
	}
}
