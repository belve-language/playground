import {optionalStartingWithUnknownFunctionHeaderSegmentsRestRuleName} from "./name/optionalStartingWithUnknownFunctionHeaderSegmentsRestRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-header-segments-rest/OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-header-segments-rest/atom/OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-header-segments-rest/StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithUnknownFunctionHeaderSegmentsRestRule extends Rule<
	OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStartingWithUnknownFunctionHeaderSegmentsRestRuleName);
	}
	public override buildNode(
		atom: OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<StartingWithUnknownFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>(
				ruleById.StartingWithUnknownFunctionHeaderSegmentsRest,
			),
		];
		return rightExpressions;
	}
}
