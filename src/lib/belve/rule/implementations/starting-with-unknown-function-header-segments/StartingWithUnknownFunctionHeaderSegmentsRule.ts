import {startingWithUnknownFunctionHeaderSegmentsRuleName} from "./name/startingWithUnknownFunctionHeaderSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-header-segments-rest/OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments/atom/StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-header-segment/UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionHeaderSegmentsRule extends Rule<
	StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithUnknownFunctionHeaderSegmentsRuleName);
	}
	public override buildNode(
		atom: StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionHeaderSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<UnknownFunctionHeaderSegmentConcreteSyntaxTreeNode>(
					ruleById.UnknownFunctionHeaderSegment,
				),
				new NonTerminalExpression<OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>(
					ruleById.OptionalStartingWithUnknownFunctionHeaderSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
