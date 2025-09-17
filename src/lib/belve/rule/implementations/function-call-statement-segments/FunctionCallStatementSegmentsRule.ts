import {functionCallStatementSegmentsRuleName} from "./name/functionCallStatementSegmentsRuleName.ts";
import {FunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-statement-segments/FunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-call-statement-segments/atom/FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionCallStatementSegmentsRule extends Rule<
	FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	FunctionCallStatementSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(functionCallStatementSegmentsRuleName);
	}
	public override buildNode(
		atom: FunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	): FunctionCallStatementSegmentsConcreteSyntaxTreeNode {
		const node = new FunctionCallStatementSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallStatementSegments,
			),
			new NonTerminalExpression(
				ruleById.StartingWithWordFunctionCallStatementSegments,
			),
		];
		return rightExpressions;
	}
}
