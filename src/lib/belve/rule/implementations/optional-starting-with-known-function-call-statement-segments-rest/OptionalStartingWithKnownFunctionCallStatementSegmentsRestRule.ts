import {optionalStartingWithKnownFunctionCallStatementSegmentsRestRuleName} from "./name/optionalStartingWithKnownFunctionCallStatementSegmentsRestRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import {OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-call-statement-segments-rest/OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import type {OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-starting-with-known-function-call-statement-segments-rest/atom/OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom.ts";
import type {StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/starting-with-known-function-call-statement-segments-rest/StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalStartingWithKnownFunctionCallStatementSegmentsRestRule extends Rule<
	OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalStartingWithKnownFunctionCallStatementSegmentsRestRuleName);
	}
	public override buildNode(
		atom: OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNodeAtom,
	): OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode {
		const node =
			new OptionalStartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode(
				atom,
			);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<StartingWithKnownFunctionCallStatementSegmentsRestConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(
				ruleById.StartingWithKnownFunctionCallStatementSegmentsRest,
			),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
