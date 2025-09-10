import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-header-segments-rest/atom/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithKnownFunctionHeaderSegmentsRestRule extends Rule<OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalStartingWithKnownFunctionHeaderSegmentsRest");
	}
	public override buildNode(
		atom: OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionHeaderSegmentsRest,
			),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
