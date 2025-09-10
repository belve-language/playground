import type {EmptyConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/empty/EmptyConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header-segments/FunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import type {OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/optional-function-header-segments/atom/OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNodeAtom.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class OptionalFunctionHeaderSegmentsRule extends Rule<OptionalFunctionHeaderSegmentsConcreteSyntaxTreeNode> {
	public constructor() {
		super("OptionalFunctionHeaderSegments");
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
		NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
			NonTerminalExpression<EmptyConcreteSyntaxTreeNode>,
		] = [
			new NonTerminalExpression(ruleById.FunctionHeaderSegments),
			new NonTerminalExpression(ruleById.Empty),
		];
		return rightExpressions;
	}
}
