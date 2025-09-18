import {optionalStartingWithWordFunctionCallStatementSegmentsRestRuleName} from "./name/optionalStartingWithWordFunctionCallStatementSegmentsRestRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-call-statement-segments-rest/OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-word-function-call-statement-segments-rest/atom/OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-word-function-call-statement-segments-rest/StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithWordFunctionCallStatementSegmentsRestRule extends Rule<
	OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStartingWithWordFunctionCallStatementSegmentsRestRuleName);
	}
	public override buildNode(
		atom: OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<StartingWithWordFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>(
				ruleById.StartingWithWordFunctionCallStatementSegmentsRest,
			),
		];
		return rightExpressions;
	}
}
