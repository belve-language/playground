import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-call-segments-rest/OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-segments/StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-segments/atom/StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WordFunctionCallSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-function-call-segment/WordFunctionCallSegmentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionCallSegmentsRule extends Rule<StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super("StartingWithWordFunctionCallSegments");
	}
	public override buildNode(
		atom: StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode {
		const node = new StartingWithWordFunctionCallSegmentsConcreteSyntaxTreeNode(
			atom,
		);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WordFunctionCallSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithWordFunctionCallSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.WordFunctionCallSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithWordFunctionCallSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
