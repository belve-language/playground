import {optionalStartingWithWordFunctionHeaderSegmentsRestRuleName} from "./name/optionalStartingWithWordFunctionHeaderSegmentsRestRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-header-segments-rest/OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-header-segments-rest/atom/OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-header-segments-rest/StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithWordFunctionHeaderSegmentsRestRule extends Rule<
	OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStartingWithWordFunctionHeaderSegmentsRestRuleName);
	}
	public override buildNode(
		atom: OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithWordFunctionHeaderSegmentsRestConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithWordFunctionHeaderSegmentsRest,
			),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
