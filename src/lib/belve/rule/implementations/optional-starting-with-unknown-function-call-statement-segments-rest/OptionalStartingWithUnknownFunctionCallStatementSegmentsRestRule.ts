import {optionalStartingWithUnknownFunctionCallStatementSegmentsRestRuleName} from "./name/optionalStartingWithUnknownFunctionCallStatementSegmentsRestRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-call-statement-segments-rest/OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-unknown-function-call-statement-segments-rest/atom/OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-unknown-function-call-statement-segments-rest/StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithUnknownFunctionCallStatementSegmentsRestRule extends Rule<
	OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStartingWithUnknownFunctionCallStatementSegmentsRestRuleName);
	}
	public override buildNode(
		atom: OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithUnknownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithUnknownFunctionCallStatementSegmentsRest,
			),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
