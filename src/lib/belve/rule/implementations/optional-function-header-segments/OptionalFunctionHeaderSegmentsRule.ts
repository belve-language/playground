import {optionalFunctionHeaderSegmentsRuleName} from "./name/optionalFunctionHeaderSegmentsRuleName.ts";
import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header-segments/FunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/atom/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionHeaderSegmentsRule extends Rule<
	OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode
> {
	public constructor() {
		super(optionalFunctionHeaderSegmentsRuleName);
	}
	public override buildNode(
		atom: OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom,
	): OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode {
		const node = new OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
			NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression<EmptyConcreteSyntaxTreeNode>(ruleById.Empty),
			new NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>(
				ruleById.FunctionHeaderSegments,
			),
		];
		return rightExpressions;
	}
}
