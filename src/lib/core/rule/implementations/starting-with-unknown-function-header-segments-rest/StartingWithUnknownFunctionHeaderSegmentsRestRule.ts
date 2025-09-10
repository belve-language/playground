import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments-rest/atom/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionHeaderSegmentsRestRule extends Rule<StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithUnknownFunctionHeaderSegmentsRest");
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
