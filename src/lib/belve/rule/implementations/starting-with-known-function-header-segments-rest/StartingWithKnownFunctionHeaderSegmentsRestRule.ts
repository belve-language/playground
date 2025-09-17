import {startingWithKnownFunctionHeaderSegmentsRestRuleName} from "./name/startingWithKnownFunctionHeaderSegmentsRestRuleName.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments-rest/atom/StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithKnownFunctionHeaderSegmentsRestRule extends Rule<
	StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithKnownFunctionHeaderSegmentsRestRuleName);
	}
	public override buildNode(
		atom: StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.SeparatedOptionalFunctionHeaderSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionHeaderSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionHeaderSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithWordFunctionHeaderSegments,
			),
		];
		return rightExpressions;
	}
}
