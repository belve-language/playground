import {FunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header-segments/FunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-header-segments/atom/FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionHeaderSegmentsRule extends Rule<FunctionHeaderSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: FunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	): FunctionHeaderSegmentsConcreteSyntaxTreeNode {
		const node = new FunctionHeaderSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionHeaderSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionHeaderSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithWordFunctionHeaderSegments,
			),
		];
		return rightExpressions;
	}
}
