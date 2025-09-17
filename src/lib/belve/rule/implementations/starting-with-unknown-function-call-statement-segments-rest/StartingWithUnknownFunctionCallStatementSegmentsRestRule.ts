import {startingWithUnknownFunctionCallStatementSegmentsRestRuleName} from "./name/startingWithUnknownFunctionCallStatementSegmentsRestRuleName.ts";
import type {SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-statement-segments/SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments-rest/StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments-rest/atom/StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionCallStatementSegmentsRestRule extends Rule<
	StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithUnknownFunctionCallStatementSegmentsRestRuleName);
	}
	public override buildNode(
		atom: StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.SeparatedOptionalFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithWordFunctionCallStatementSegments,
			),
		];
		return rightExpressions;
	}
}
