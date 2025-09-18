import {optionalStartingWithKnownFunctionHeaderSegmentsRestRuleName} from "./name/optionalStartingWithKnownFunctionHeaderSegmentsRestRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-header-segments-rest/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-header-segments-rest/atom/OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-header-segments-rest/StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithKnownFunctionHeaderSegmentsRestRule extends Rule<
	OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	OptionalStartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStartingWithKnownFunctionHeaderSegmentsRestRuleName);
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
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<StartingWithKnownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>(
				ruleById.StartingWithKnownFunctionHeaderSegmentsRest,
			),
		];
		return rightExpressions;
	}
}
