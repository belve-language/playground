import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-call-segments/FunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import {OptionalFunctionCallSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-call-segments/OptionalFunctionCallSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-call-segments/atom/OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {EmptyExpression} from "../../../expression/implementations/empty/EmptyExpression.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionCallSegmentsRule extends Rule<OptionalFunctionCallSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: OptionalFunctionCallSegmentsConcreteSyntaxTreeNodeAtom,
	): OptionalFunctionCallSegmentsConcreteSyntaxTreeNode {
		const node = new OptionalFunctionCallSegmentsConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionCallSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionCallSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.FunctionCallSegments),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
