import {startingWithKnownFunctionCallStatementSegmentsRestRuleName} from "./name/startingWithKnownFunctionCallStatementSegmentsRestRuleName.ts";
import type {SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-statement-segments/SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments-rest/StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments-rest/atom/StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithKnownFunctionCallStatementSegmentsRestRule extends Rule<
	StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithKnownFunctionCallStatementSegmentsRestRuleName);
	}
	public override buildNode(
		atom: StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.SeparatedOptionalFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithWordFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionCallStatementSegments,
			),
		];
		return rightExpressions;
	}
}
