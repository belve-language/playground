import {startingWithWordFunctionHeaderSegmentsRuleName} from "./name/startingWithWordFunctionHeaderSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-header-segments-rest/OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments/atom/StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WordFunctionHeaderSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-function-header-segment/WordFunctionHeaderSegmentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionHeaderSegmentsRule extends Rule<
	StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithWordFunctionHeaderSegmentsRuleName);
	}
	public override buildNode(
		atom: StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionHeaderSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		ThenExpression<
			NonTerminalAtom<WordFunctionHeaderSegmentConcreteSyntaxTreeNode>,
			NonTerminalAtom<OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
		>,
	] {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WordFunctionHeaderSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression<
				NonTerminalAtom<WordFunctionHeaderSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>
			>(
				new NonTerminalExpression<WordFunctionHeaderSegmentConcreteSyntaxTreeNode>(
					ruleById.WordFunctionHeaderSegment,
				),
				new NonTerminalExpression<OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>(
					ruleById.OptionalStartingWithWordFunctionHeaderSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
