import type {SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-segments/SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments-rest/StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments-rest/atom/StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-segments/StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionCallSegmentsRestRule extends Rule<StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithUnknownFunctionCallSegmentsRest");
	}
	public override buildNode(
		atom: StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.SeparatedOptionalFunctionCallSegments),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallSegments,
			),
			new NonTerminalExpression(ruleById.StartingWithKnownFunctionCallSegments),
			new NonTerminalExpression(ruleById.StartingWithWordFunctionCallSegments),
		];
		return rightExpressions;
	}
}
