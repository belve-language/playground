import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {KnownFunctionCallSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/known-function-call-segment/KnownFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-call-segments-rest/OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments/atom/StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithKnownFunctionCallSegmentsRule extends Rule<StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithKnownFunctionCallSegments");
	}
	public override buildNode(
		atom: StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithKnownFunctionCallSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<KnownFunctionCallSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<KnownFunctionCallSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.KnownFunctionCallSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithKnownFunctionCallSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
