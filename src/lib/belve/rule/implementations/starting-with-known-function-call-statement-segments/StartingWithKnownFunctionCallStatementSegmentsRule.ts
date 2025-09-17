import {startingWithKnownFunctionCallStatementSegmentsRuleName} from "./name/startingWithKnownFunctionCallStatementSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-statement-segment/KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-call-statement-segments-rest/OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments/atom/StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithKnownFunctionCallStatementSegmentsRule extends Rule<
	StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithKnownFunctionCallStatementSegmentsRuleName);
	}
	public override buildNode(
		atom: StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionCallStatementSegmentsConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression<KnownFunctionCallStatementSegmentConcreteSyntaxTreeNode>(
					ruleById.KnownFunctionCallStatementSegment,
				),
				new NonTerminalExpression<OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>(
					ruleById.OptionalStartingWithKnownFunctionCallStatementSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
