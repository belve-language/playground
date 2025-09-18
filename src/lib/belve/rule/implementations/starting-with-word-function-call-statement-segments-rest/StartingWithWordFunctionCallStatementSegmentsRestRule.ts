import {startingWithWordFunctionCallStatementSegmentsRestRuleName} from "./name/startingWithWordFunctionCallStatementSegmentsRestRuleName.ts";
import type {SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-statement-segments/SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments-rest/StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments-rest/atom/StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionCallStatementSegmentsRestRule extends Rule<
	StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithWordFunctionCallStatementSegmentsRestRuleName);
	}
	public override buildNode(
		atom: StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>(
				ruleById.SeparatedOptionalFunctionCallStatementSegments,
			),
			new NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>(
				ruleById.StartingWithKnownFunctionCallStatementSegments,
			),
			new NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>(
				ruleById.StartingWithUnknownFunctionCallStatementSegments,
			),
		];
		return rightExpressions;
	}
}
