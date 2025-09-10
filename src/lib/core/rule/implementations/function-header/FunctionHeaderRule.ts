import {FunctionHeaderConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header/FunctionHeaderConcreteSyntaxTreeNode.ts";
import type {FunctionHeaderConcreteSyntaxTreeNodeAtom} from "../../../concrete-syntax-tree-node/implementations/function-header/atom/FunctionHeaderConcreteSyntaxTreeNodeAtom.ts";
import type {FunctionHeaderSegmentsConcreteSyntaxTreeNode} from "../../../concrete-syntax-tree-node/implementations/function-header-segments/FunctionHeaderSegmentsConcreteSyntaxTreeNode.ts";
import {NonTerminalExpression} from "../../../expression/implementations/non-terminal/NonTerminalExpression.ts";
import type {RuleById} from "../../../rule-by-id/RuleById.ts";
import {Rule} from "../../Rule.ts";
export class FunctionHeaderRule extends Rule<FunctionHeaderConcreteSyntaxTreeNode> {
	public constructor() {
		super();
	}
	public override buildNode(
		atom: FunctionHeaderConcreteSyntaxTreeNodeAtom,
	): FunctionHeaderConcreteSyntaxTreeNode {
		const node = new FunctionHeaderConcreteSyntaxTreeNode(atom);
		return node;
	}
	public override getRightExpressions(
		ruleById: RuleById,
	): readonly [
		NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
	] {
		const rightExpressions: readonly [
			NonTerminalExpression<FunctionHeaderSegmentsConcreteSyntaxTreeNode>,
		] = [new NonTerminalExpression(ruleById.FunctionHeaderSegments)];
		return rightExpressions;
	}
}
