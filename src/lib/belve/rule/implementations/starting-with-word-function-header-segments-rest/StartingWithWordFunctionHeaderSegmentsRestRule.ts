import {startingWithWordFunctionHeaderSegmentsRestRuleName} from "./name/startingWithWordFunctionHeaderSegmentsRestRuleName.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments-rest/atom/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionHeaderSegmentsRestRule extends Rule<
	StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithWordFunctionHeaderSegmentsRestRuleName);
	}
	public override buildNode(
		atom: StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode(
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
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
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
		];
		return rightExpressions;
	}
}
