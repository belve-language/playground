import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-header-segments/atom/SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/atom/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/atom/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments-rest/atom/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionHeaderSegmentsRestRule extends Rule<StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithWordFunctionHeaderSegmentsRest");
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
		NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
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
		];
		return rightExpressions;
	}
}
