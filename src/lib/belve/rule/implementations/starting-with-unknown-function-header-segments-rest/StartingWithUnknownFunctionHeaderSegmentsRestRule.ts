import {startingWithUnknownFunctionHeaderSegmentsRestRuleName} from "./name/startingWithUnknownFunctionHeaderSegmentsRestRuleName.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments-rest/atom/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionHeaderSegmentsRestRule extends Rule<
	StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithUnknownFunctionHeaderSegmentsRestRuleName);
	}
	public override buildNode(
		atom: StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>(
				ruleById.SeparatedOptionalFunctionHeaderSegments,
			),
			new NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>(
				ruleById.StartingWithKnownFunctionHeaderSegments,
			),
			new NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>(
				ruleById.StartingWithUnknownFunctionHeaderSegments,
			),
			new NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>(
				ruleById.StartingWithWordFunctionHeaderSegments,
			),
		];
		return rightExpressions;
	}
}
