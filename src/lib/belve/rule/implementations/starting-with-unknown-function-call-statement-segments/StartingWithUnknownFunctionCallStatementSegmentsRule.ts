import {startingWithUnknownFunctionCallStatementSegmentsRuleName} from "./name/startingWithUnknownFunctionCallStatementSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-call-statement-segments-rest/OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments/atom/StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/unknown-function-call-statement-segment/UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithUnknownFunctionCallStatementSegmentsRule extends Rule<
	StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithUnknownFunctionCallStatementSegmentsRuleName);
	}
	public override buildNode(
		atom: StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithUnknownFunctionCallStatementSegmentsConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<UnknownFunctionCallStatementSegmentConcreteSyntaxTreeNode>(
					ruleById.UnknownFunctionCallStatementSegment,
				),
				new NonTerminalExpression<OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>(
					ruleById.OptionalStartingWithUnknownFunctionCallStatementSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
