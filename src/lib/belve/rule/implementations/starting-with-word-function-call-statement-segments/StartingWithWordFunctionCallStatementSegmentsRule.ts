import {startingWithWordFunctionCallStatementSegmentsRuleName} from "./name/startingWithWordFunctionCallStatementSegmentsRuleName.ts";
import type {NonTerminalAtom} from "../../../atom/implementations/non-terminal/NonTermnalAtom.ts";
import type {OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-call-statement-segments-rest/OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments/atom/StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import type {WordFunctionCallStatementSegmentConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/word-function-call-statement-segment/WordFunctionCallStatementSegmentConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import {ThenExpression} from "../../../expression/implementations/then/ThenExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class StartingWithWordFunctionCallStatementSegmentsRule extends Rule<
	StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(startingWithWordFunctionCallStatementSegmentsRuleName);
	}
	public override buildNode(
		atom: StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	): StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode {
		const node =
			new StartingWithWordFunctionCallStatementSegmentsConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(ruleById: RuleById) {
		const rightExpressions: readonly [
			ThenExpression<
				NonTerminalAtom<WordFunctionCallStatementSegmentConcreteSyntaxTreeNode>,
				NonTerminalAtom<OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>
			>,
		] = [
			new ThenExpression(
				new NonTerminalExpression(ruleById.WordFunctionCallStatementSegment),
				new NonTerminalExpression(
					ruleById.OptionalStartingWithWordFunctionCallStatementSegmentsRest,
				),
			),
		];
		return rightExpressions;
	}
}
