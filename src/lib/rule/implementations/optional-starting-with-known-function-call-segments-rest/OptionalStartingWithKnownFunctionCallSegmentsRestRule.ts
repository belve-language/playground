import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-call-segments-rest/OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-call-segments-rest/atom/OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-segments-rest/StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithKnownFunctionCallSegmentsRestRule extends Rule<OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithKnownFunctionCallSegmentsRestConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionCallSegmentsRest,
			),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
