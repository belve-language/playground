import type {SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/separated-optional-function-call-segments/SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-segments-rest/StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-segments-rest/atom/StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionCallSegmentsRestRule extends Rule<StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	): StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<SeparatedOptionalFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.SeparatedOptionalFunctionCallSegments),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallSegments,
			),
			new NonTerminalExpression(ruleById.StartingWithKnownFunctionCallSegments),
		];
		return rightExpressions;
	}
}
