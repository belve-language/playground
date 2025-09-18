import {startingWithKnownFunctionHeaderSegmentsRuleName} from "./name/startingWithKnownFunctionHeaderSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {KnownFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-header-segment/KnownFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments/atom/StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithKnownFunctionHeaderSegmentsRule extends Rule<
	StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithKnownFunctionHeaderSegmentsRuleName);
	}
	public override buildNode(
		atom: StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionHeaderSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<KnownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<KnownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<KnownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<KnownFunctionHeaderSegmentConcreteSyntaxTreeNode>(
					ruleById.KnownFunctionHeaderSegment,
				),
				new NonTerminalExpression<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>(
					ruleById.OptionalStartingWithKnownFunctionHeaderSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
