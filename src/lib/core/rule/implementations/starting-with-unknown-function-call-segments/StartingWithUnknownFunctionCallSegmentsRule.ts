import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-call-segments-rest/OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments/atom/StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionCallSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-segment/UnknownFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionCallSegmentsRule extends Rule<StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithUnknownFunctionCallSegments");
	}
	public override buildNode(
		atom: StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionCallSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<UnknownFunctionCallSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<UnknownFunctionCallSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.UnknownFunctionCallSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithUnknownFunctionCallSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
