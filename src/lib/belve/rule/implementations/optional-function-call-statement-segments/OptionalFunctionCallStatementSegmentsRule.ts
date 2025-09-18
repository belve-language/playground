import {optionalFunctionCallStatementSegmentsRuleName} from "./name/optionalFunctionCallStatementSegmentsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-statement-segments/FunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import {OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-call-statement-segments/OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-call-statement-segments/atom/OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionCallStatementSegmentsRule extends Rule<
	OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalFunctionCallStatementSegmentsRuleName);
	}
	public override buildNode(
		atom: OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNodeAtom,
	): OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode {
		const node =
			new OptionalFunctionCallStatementSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<FunctionCallStatementSegmentsConcreteSyntaxTreeNode>(
				ruleById.FunctionCallStatementSegments,
			),
		];
		return rightExpressions;
	}
}
