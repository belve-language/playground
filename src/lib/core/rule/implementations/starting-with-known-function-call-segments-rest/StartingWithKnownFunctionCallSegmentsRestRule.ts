import type {SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-segments/SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments-rest/StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments-rest/atom/StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-segments/StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithKnownFunctionCallSegmentsRestRule extends Rule<StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithKnownFunctionCallSegmentsRest");
	}
	public override buildNode(
		atom: StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.SeparatedOptionalFunctionCallSegments),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallSegments,
			),
			new NonTerminalExpression(ruleById.StartingWithWordFunctionCallSegments),
			new NonTerminalExpression(ruleById.StartingWithKnownFunctionCallSegments),
		];
		return rightExpressions;
	}
}
