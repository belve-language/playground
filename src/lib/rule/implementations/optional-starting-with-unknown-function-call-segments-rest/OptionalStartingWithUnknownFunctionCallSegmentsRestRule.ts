import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-call-segments-rest/OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-call-segments-rest/atom/OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-segments-rest/StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithUnknownFunctionCallSegmentsRestRule extends Rule<OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithUnknownFunctionCallSegmentsRestConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallSegmentsRest,
			),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
